CREATE TYPE "public"."quotation_status" AS ENUM('draft', 'sent', 'accepted', 'declined', 'expired', 'cancelled');--> statement-breakpoint
CREATE TABLE "quotations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"reference" text NOT NULL,
	"inquiry_id" uuid NOT NULL,
	"status" "quotation_status" DEFAULT 'draft' NOT NULL,
	"vehicle" text NOT NULL,
	"amount" numeric(12, 2) NOT NULL,
	"currency" text DEFAULT 'SAR' NOT NULL,
	"inclusions" text,
	"exclusions" text,
	"notes" text,
	"valid_until" text NOT NULL,
	"created_by" uuid,
	"sent_at" timestamp with time zone,
	"sent_to" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "quotations_amount_chk" CHECK ("quotations"."amount" > 0)
);
--> statement-breakpoint
ALTER TABLE "quotations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_inquiry_id_inquiries_id_fk" FOREIGN KEY ("inquiry_id") REFERENCES "public"."inquiries"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quotations" ADD CONSTRAINT "quotations_created_by_admin_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."admin_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "quotations_reference_uq" ON "quotations" USING btree ("reference");--> statement-breakpoint
CREATE INDEX "quotations_inquiry_idx" ON "quotations" USING btree ("inquiry_id","created_at");