import { config } from "dotenv";

config({ path: ".env.local" });
// Tests must never send real email, even when .env.local holds real SMTP credentials.
process.env.EMAIL_PROVIDER = "none";
