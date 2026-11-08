CREATE TYPE "public"."admin_role" AS ENUM('owner', 'admin', 'staff');--> statement-breakpoint
CREATE TYPE "public"."contact_method" AS ENUM('whatsapp', 'phone', 'email');--> statement-breakpoint
CREATE TYPE "public"."email_status" AS ENUM('queued', 'accepted', 'delivered', 'delayed', 'bounced', 'complained', 'failed');--> statement-breakpoint
CREATE TYPE "public"."inquiry_source" AS ENUM('website', 'whatsapp_ai', 'manual', 'email', 'phone');--> statement-breakpoint
CREATE TYPE "public"."inquiry_status" AS ENUM('new', 'contacted', 'waiting_for_details', 'checking_availability', 'preparing_quotation', 'quotation_sent', 'follow_up_required', 'accepted', 'booked', 'lost', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."message_channel" AS ENUM('web', 'whatsapp', 'email', 'note');--> statement-breakpoint
CREATE TYPE "public"."message_direction" AS ENUM('in', 'out', 'internal');--> statement-breakpoint
CREATE TYPE "public"."trip_type" AS ENUM('one_way', 'round_trip', 'multi_stop');--> statement-breakpoint
CREATE TABLE "admin_users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"role" "admin_role" DEFAULT 'staff' NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "admin_users" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "audit_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"actor_id" uuid,
	"actor_email" text,
	"action" text NOT NULL,
	"entity" text,
	"entity_id" text,
	"before" jsonb,
	"after" jsonb,
	"ip" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "audit_logs" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "counters" (
	"name" text PRIMARY KEY NOT NULL,
	"value" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "counters" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "customers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text,
	"phone" text,
	"country_code" text,
	"preferred_contact" "contact_method",
	"notes_internal" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "customers" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "email_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"template" text NOT NULL,
	"to_email" text NOT NULL,
	"from_email" text NOT NULL,
	"subject" text NOT NULL,
	"related_type" text,
	"related_id" uuid,
	"provider" text NOT NULL,
	"provider_message_id" text,
	"status" "email_status" DEFAULT 'queued' NOT NULL,
	"error" text,
	"attempt" integer DEFAULT 1 NOT NULL,
	"idempotency_key" text,
	"sent_at" timestamp with time zone,
	"delivered_at" timestamp with time zone,
	"events" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "email_logs" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "inquiries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"reference" text NOT NULL,
	"customer_id" uuid NOT NULL,
	"source" "inquiry_source" DEFAULT 'website' NOT NULL,
	"locale" text,
	"status" "inquiry_status" DEFAULT 'new' NOT NULL,
	"assigned_to" uuid,
	"service_key" text,
	"trip_type" "trip_type" DEFAULT 'one_way' NOT NULL,
	"pickup" text NOT NULL,
	"dropoff" text NOT NULL,
	"stops" jsonb,
	"pickup_date" text NOT NULL,
	"pickup_time" text NOT NULL,
	"return_date" text,
	"return_time" text,
	"adults" integer DEFAULT 1 NOT NULL,
	"children" integer DEFAULT 0 NOT NULL,
	"infants" integer DEFAULT 0 NOT NULL,
	"large_bags" integer DEFAULT 0 NOT NULL,
	"small_bags" integer DEFAULT 0 NOT NULL,
	"vehicle_pref" text,
	"child_seat" boolean DEFAULT false NOT NULL,
	"flight_no" text,
	"hotel_address" text,
	"special_requirements" text,
	"customer_notes" text,
	"source_page" text,
	"idempotency_key" text,
	"dedupe_hash" text,
	"ip_hash" text,
	"archived_at" timestamp with time zone,
	"deleted_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "inquiries_pax_chk" CHECK ("inquiries"."adults" >= 1 and "inquiries"."children" >= 0 and "inquiries"."infants" >= 0 and "inquiries"."large_bags" >= 0 and "inquiries"."small_bags" >= 0)
);
--> statement-breakpoint
ALTER TABLE "inquiries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "inquiry_activities" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"inquiry_id" uuid NOT NULL,
	"actor_id" uuid,
	"type" text NOT NULL,
	"summary" text NOT NULL,
	"meta" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "inquiry_activities" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "inquiry_messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"inquiry_id" uuid NOT NULL,
	"direction" "message_direction" NOT NULL,
	"channel" "message_channel" NOT NULL,
	"body" text NOT NULL,
	"author_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "inquiry_messages" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "rate_limits" (
	"key" text PRIMARY KEY NOT NULL,
	"count" integer DEFAULT 0 NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "rate_limits" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "system_settings" (
	"key" text PRIMARY KEY NOT NULL,
	"value" jsonb NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "system_settings" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "inquiries" ADD CONSTRAINT "inquiries_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inquiries" ADD CONSTRAINT "inquiries_assigned_to_admin_users_id_fk" FOREIGN KEY ("assigned_to") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inquiry_activities" ADD CONSTRAINT "inquiry_activities_inquiry_id_inquiries_id_fk" FOREIGN KEY ("inquiry_id") REFERENCES "public"."inquiries"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inquiry_activities" ADD CONSTRAINT "inquiry_activities_actor_id_admin_users_id_fk" FOREIGN KEY ("actor_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inquiry_messages" ADD CONSTRAINT "inquiry_messages_inquiry_id_inquiries_id_fk" FOREIGN KEY ("inquiry_id") REFERENCES "public"."inquiries"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inquiry_messages" ADD CONSTRAINT "inquiry_messages_author_id_admin_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "admin_users_email_uq" ON "admin_users" USING btree (lower("email"));--> statement-breakpoint
CREATE INDEX "audit_logs_entity_idx" ON "audit_logs" USING btree ("entity","entity_id");--> statement-breakpoint
CREATE INDEX "audit_logs_created_idx" ON "audit_logs" USING btree ("created_at" DESC NULLS LAST);--> statement-breakpoint
CREATE UNIQUE INDEX "customers_email_uq" ON "customers" USING btree (lower("email")) WHERE "customers"."email" is not null and "customers"."deleted_at" is null;--> statement-breakpoint
CREATE INDEX "customers_phone_idx" ON "customers" USING btree ("phone");--> statement-breakpoint
CREATE UNIQUE INDEX "email_logs_idem_uq" ON "email_logs" USING btree ("idempotency_key") WHERE "email_logs"."idempotency_key" is not null;--> statement-breakpoint
CREATE INDEX "email_logs_related_idx" ON "email_logs" USING btree ("related_type","related_id");--> statement-breakpoint
CREATE INDEX "email_logs_provider_msg_idx" ON "email_logs" USING btree ("provider_message_id");--> statement-breakpoint
CREATE UNIQUE INDEX "inquiries_reference_uq" ON "inquiries" USING btree ("reference");--> statement-breakpoint
CREATE UNIQUE INDEX "inquiries_idem_uq" ON "inquiries" USING btree ("idempotency_key") WHERE "inquiries"."idempotency_key" is not null;--> statement-breakpoint
CREATE INDEX "inquiries_status_created_idx" ON "inquiries" USING btree ("status","created_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "inquiries_customer_idx" ON "inquiries" USING btree ("customer_id");--> statement-breakpoint
CREATE INDEX "inquiries_dedupe_idx" ON "inquiries" USING btree ("dedupe_hash","created_at");--> statement-breakpoint
CREATE INDEX "inquiry_activities_inquiry_idx" ON "inquiry_activities" USING btree ("inquiry_id","created_at");--> statement-breakpoint
CREATE INDEX "inquiry_messages_inquiry_idx" ON "inquiry_messages" USING btree ("inquiry_id","created_at");--> statement-breakpoint
CREATE INDEX "rate_limits_expires_idx" ON "rate_limits" USING btree ("expires_at");