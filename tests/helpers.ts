import { sqlClient } from "@/server/db/client";

/** Remove everything a test created and give burned reference numbers back to the counters. */
export async function cleanup(tag: string) {
  const s = sqlClient();
  await s`delete from inquiry_activities where inquiry_id in (select id from inquiries where customer_notes = ${tag})`;
  await s`delete from inquiries where customer_notes = ${tag}`;
  await s`delete from customers where email like ${tag + "%"}`;
  await s`delete from counters where name like 'inquiry-%' and not exists (select 1 from inquiries where reference like 'RS-' || substr(counters.name, 9) || '-%')`;
  await s`update counters set value = coalesce((select max(substr(reference, 9)::int) from inquiries where reference like 'RS-' || substr(counters.name, 9) || '-%'), 0) where name like 'inquiry-%'`;
}
