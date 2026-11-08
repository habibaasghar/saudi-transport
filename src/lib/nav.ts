/** Primary navigation. Luxury and Event transportation are deliberately first-class here. */
export const navItems = [
  { key: "services", href: "/services" },
  { key: "airport", href: "/services/airport-transfers" },
  { key: "riyadh", href: "/services/city-transport/riyadh" },
  { key: "umrah", href: "/services/umrah-transport" },
  { key: "luxury", href: "/luxury-transportation" },
  { key: "events", href: "/services/event-transportation" },
  { key: "contact", href: "/#quote" },
] as const;
