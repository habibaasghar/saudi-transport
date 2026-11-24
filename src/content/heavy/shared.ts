import type { Copy, ServicePage } from "../types";

/** Heavy transport, satha recovery and machinery haulage category (owner brief 2026-11-22). */
export const HT = "services/recovery-heavy-transport";
export const SATHA = `${HT}/satha-car-recovery`;
export const CARS = `${HT}/car-transport-between-cities`;
export const LOWBED = `${HT}/lowbed-transport`;
export const FLATBED = `${HT}/flatbed-trailer-transport`;
export const HEAVY = `${HT}/heavy-equipment-transport`;
export const EXCAVATOR = `${HT}/excavator-transport`;
export const LOADER = `${HT}/wheel-loader-transport`;
export const FORKLIFT = `${HT}/forklift-transport`;
export const CRANE = `${HT}/crane-transport`;
export const OVERSIZED = `${HT}/oversized-load-transport`;
export const RELOCATION = `${HT}/industrial-machinery-relocation`;

/** Added 2026-11-24 (recovery pages). */
export const HYDRAULIC = `${SATHA}/hydraulic-satha`;
export const TRUCKS = `${HT}/truck-recovery`;

export const UPDATED = "2026-11-22";

export const heavyPage = (
  path: string,
  parent: string | undefined,
  heavyService: string | undefined,
  related: string[],
  en: Copy,
  ar: Copy,
): ServicePage => ({ path, parent, variant: "industrial", service: "heavy", heavyService, related, updated: UPDATED, copy: { en, ar } });
