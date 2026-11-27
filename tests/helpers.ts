import { sqlClient } from "@/server/db/client";

/** Remove everything a test created and give burned reference numbers back to the counters. */
export async function cleanup(tag: string) {
  const s = sqlClient();
  await s`delete from email_logs where related_id in (select q.id from quotations q join inquiries i on i.id = q.inquiry_id where i.customer_notes = ${tag})`;
  await s`delete from audit_logs where entity_id in (select q.id::text from quotations q join inquiries i on i.id = q.inquiry_id where i.customer_notes = ${tag}) or entity_id in (select id::text from inquiries where customer_notes = ${tag})`;
  await s`delete from quotations where inquiry_id in (select id from inquiries where customer_notes = ${tag})`;
  await s`delete from inquiry_messages where inquiry_id in (select id from inquiries where customer_notes = ${tag})`;
  await s`delete from email_logs where related_id in (select id from inquiries where customer_notes = ${tag})`;
  await s`delete from inquiry_activities where inquiry_id in (select id from inquiries where customer_notes = ${tag})`;
  await s`delete from inquiries where customer_notes = ${tag}`;
  await s`delete from customers where email like ${tag + "%"}`;
  await s`delete from counters where name like 'inquiry-%' and not exists (select 1 from inquiries where reference like 'RS-' || substr(counters.name, 9) || '-%')`;
  await s`delete from counters where name like 'quotation-%' and not exists (select 1 from quotations where reference like 'QT-' || substr(counters.name, 11) || '-%')`;
  await s`update counters set value = coalesce((select max(substr(reference, 9)::int) from quotations where reference like 'QT-' || substr(counters.name, 11) || '-%'), 0) where name like 'quotation-%'`;
  await s`update counters set value = coalesce((select max(substr(reference, 9)::int) from inquiries where reference like 'RS-' || substr(counters.name, 9) || '-%'), 0) where name like 'inquiry-%'`;
}
