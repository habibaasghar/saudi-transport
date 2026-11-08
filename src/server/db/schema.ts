import { sql } from "drizzle-orm";
import {
  boolean, check, index, integer, jsonb, pgEnum, pgTable, text, timestamp, uniqueIndex, uuid,
} from "drizzle-orm/pg-core";

/**
 * Phase 2 core schema (see docs/DATABASE_SCHEMA.md). Every table has RLS enabled and NO policies:
 * only the server (DATABASE_URL role) can read/write. Browsers never touch these tables.
 */

export const adminRole = pgEnum("admin_role", ["owner", "admin", "staff"]);
export const contactMethod = pgEnum("contact_method", ["whatsapp", "phone", "email"]);
export const inquirySource = pgEnum("inquiry_source", ["website", "whatsapp_ai", "manual", "email", "phone"]);
export const inquiryStatus = pgEnum("inquiry_status", [
  "new", "contacted", "waiting_for_details", "checking_availability", "preparing_quotation",
  "quotation_sent", "follow_up_required", "accepted", "booked", "lost", "cancelled",
]);
export const tripType = pgEnum("trip_type", ["one_way", "round_trip", "multi_stop"]);
export const messageChannel = pgEnum("message_channel", ["web", "whatsapp", "email", "note"]);
export const messageDirection = pgEnum("message_direction", ["in", "out", "internal"]);
export const emailStatus = pgEnum("email_status", [
  "queued", "accepted", "delivered", "delayed", "bounced", "complained", "failed",
]);

const id = () => uuid("id").primaryKey().defaultRandom();
const createdAt = () => timestamp("created_at", { withTimezone: true }).notNull().defaultNow();
const updatedAt = () => timestamp("updated_at", { withTimezone: true }).notNull().defaultNow();

export const adminUsers = pgTable("admin_users", {
  id: id(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  role: adminRole("role").notNull().default("staff"),
  active: boolean("active").notNull().default(true),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
}, (t) => [uniqueIndex("admin_users_email_uq").on(sql`lower(${t.email})`)]).enableRLS();

export const customers = pgTable("customers", {
  id: id(),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  countryCode: text("country_code"),
  preferredContact: contactMethod("preferred_contact"),
  notesInternal: text("notes_internal"),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
}, (t) => [
  uniqueIndex("customers_email_uq").on(sql`lower(${t.email})`).where(sql`${t.email} is not null and ${t.deletedAt} is null`),
  index("customers_phone_idx").on(t.phone),
]).enableRLS();

export const inquiries = pgTable("inquiries", {
  id: id(),
  reference: text("reference").notNull(),
  customerId: uuid("customer_id").notNull().references(() => customers.id, { onDelete: "restrict" }),
  source: inquirySource("source").notNull().default("website"),
  locale: text("locale"),
  status: inquiryStatus("status").notNull().default("new"),
  assignedTo: uuid("assigned_to").references(() => adminUsers.id, { onDelete: "set null" }),
  serviceKey: text("service_key"),
  tripType: tripType("trip_type").notNull().default("one_way"),
  pickup: text("pickup").notNull(),
  dropoff: text("dropoff").notNull(),
  stops: jsonb("stops").$type<string[]>(),
  pickupDate: text("pickup_date").notNull(),   // YYYY-MM-DD as entered (local Saudi date)
  pickupTime: text("pickup_time").notNull(),   // HH:MM
  returnDate: text("return_date"),
  returnTime: text("return_time"),
  adults: integer("adults").notNull().default(1),
  children: integer("children").notNull().default(0),
  infants: integer("infants").notNull().default(0),
  largeBags: integer("large_bags").notNull().default(0),
  smallBags: integer("small_bags").notNull().default(0),
  vehiclePref: text("vehicle_pref"),
  childSeat: boolean("child_seat").notNull().default(false),
  flightNo: text("flight_no"),
  hotelAddress: text("hotel_address"),
  specialRequirements: text("special_requirements"),
  customerNotes: text("customer_notes"),
  sourcePage: text("source_page"),
  idempotencyKey: text("idempotency_key"),
  dedupeHash: text("dedupe_hash"),
  ipHash: text("ip_hash"),
  archivedAt: timestamp("archived_at", { withTimezone: true }),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
}, (t) => [
  uniqueIndex("inquiries_reference_uq").on(t.reference),
  uniqueIndex("inquiries_idem_uq").on(t.idempotencyKey).where(sql`${t.idempotencyKey} is not null`),
  index("inquiries_status_created_idx").on(t.status, t.createdAt.desc()),
  index("inquiries_customer_idx").on(t.customerId),
  index("inquiries_dedupe_idx").on(t.dedupeHash, t.createdAt),
  check("inquiries_pax_chk", sql`${t.adults} >= 1 and ${t.children} >= 0 and ${t.infants} >= 0 and ${t.largeBags} >= 0 and ${t.smallBags} >= 0`),
]).enableRLS();

export const inquiryMessages = pgTable("inquiry_messages", {
  id: id(),
  inquiryId: uuid("inquiry_id").notNull().references(() => inquiries.id, { onDelete: "restrict" }),
  direction: messageDirection("direction").notNull(),
  channel: messageChannel("channel").notNull(),
  body: text("body").notNull(),
  authorId: uuid("author_id").references(() => adminUsers.id, { onDelete: "set null" }),
  createdAt: createdAt(),
}, (t) => [index("inquiry_messages_inquiry_idx").on(t.inquiryId, t.createdAt)]).enableRLS();

export const inquiryActivities = pgTable("inquiry_activities", {
  id: id(),
  inquiryId: uuid("inquiry_id").notNull().references(() => inquiries.id, { onDelete: "restrict" }),
  actorId: uuid("actor_id").references(() => adminUsers.id, { onDelete: "set null" }),
  type: text("type").notNull(),
  summary: text("summary").notNull(),
  meta: jsonb("meta"),
  createdAt: createdAt(),
}, (t) => [index("inquiry_activities_inquiry_idx").on(t.inquiryId, t.createdAt)]).enableRLS();

export const emailLogs = pgTable("email_logs", {
  id: id(),
  template: text("template").notNull(),
  toEmail: text("to_email").notNull(),
  fromEmail: text("from_email").notNull(),
  subject: text("subject").notNull(),
  relatedType: text("related_type"),
  relatedId: uuid("related_id"),
  provider: text("provider").notNull(),
  providerMessageId: text("provider_message_id"),
  status: emailStatus("status").notNull().default("queued"),
  error: text("error"),
  attempt: integer("attempt").notNull().default(1),
  idempotencyKey: text("idempotency_key"),
  sentAt: timestamp("sent_at", { withTimezone: true }),
  deliveredAt: timestamp("delivered_at", { withTimezone: true }),
  events: jsonb("events").$type<unknown[]>().notNull().default(sql`'[]'::jsonb`),
  createdAt: createdAt(),
}, (t) => [
  uniqueIndex("email_logs_idem_uq").on(t.idempotencyKey).where(sql`${t.idempotencyKey} is not null`),
  index("email_logs_related_idx").on(t.relatedType, t.relatedId),
  index("email_logs_provider_msg_idx").on(t.providerMessageId),
]).enableRLS();

export const auditLogs = pgTable("audit_logs", {
  id: id(),
  actorId: uuid("actor_id"),
  actorEmail: text("actor_email"),
  action: text("action").notNull(),
  entity: text("entity"),
  entityId: text("entity_id"),
  before: jsonb("before"),
  after: jsonb("after"),
  ip: text("ip"),
  createdAt: createdAt(),
}, (t) => [index("audit_logs_entity_idx").on(t.entity, t.entityId), index("audit_logs_created_idx").on(t.createdAt.desc())]).enableRLS();

export const systemSettings = pgTable("system_settings", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  updatedAt: updatedAt(),
}).enableRLS();

export const counters = pgTable("counters", {
  name: text("name").primaryKey(),
  value: integer("value").notNull().default(0),
}).enableRLS();

export const rateLimits = pgTable("rate_limits", {
  key: text("key").primaryKey(),   // `${scope}:${subject}:${windowStart}`
  count: integer("count").notNull().default(0),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
}, (t) => [index("rate_limits_expires_idx").on(t.expiresAt)]).enableRLS();
