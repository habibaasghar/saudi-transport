import type { ServicePage } from "./types";
import { dammamPages } from "./jeddah/dammam";
import { alulaPages } from "./jeddah/alula";
import { jazanPages } from "./jeddah/jazan";
import { abhaPages } from "./jeddah/abha";

const I = "services/intercity-transfers";
const A = "services/airport-transfers";
const C = "services/city-transport";
const T = "services/tourism-transport";

/**
 * Jeddah-origin route cluster (owner brief 2026-11-14). Jeddah to Riyadh, Riyadh to Jeddah and
 * Jeddah to AlUla already existed; this adds Jeddah to Dammam, Dammam to Jeddah, AlUla to Jeddah,
 * Jeddah to Jazan, Jazan to Jeddah, Jeddah to Abha and Abha to Jeddah. Each direction is written for
 * its own traveller, not as a mirrored copy. Sources and caveats are in each file's header comment.
 */
export const batch17JeddahRoutes: ServicePage[] = [...dammamPages, ...alulaPages, ...jazanPages, ...abhaPages];

/**
 * Existing pages that should link to the new Jeddah routes so none is orphaned and the cluster is
 * reachable from the Jeddah hub, the airport page, the intercity hub and neighbouring routes.
 */
const J = (s: string) => `${I}/${s}`;
export const jeddahBacklinks: Record<string, string[]> = {
  [`${C}/jeddah`]: [J("jeddah-to-dammam"), J("jeddah-to-jazan"), J("jeddah-to-abha"), J("alula-to-jeddah")],
  [`${A}/jeddah-airport`]: [J("jeddah-to-dammam"), J("jeddah-to-jazan"), J("jeddah-to-abha"), J("alula-to-jeddah")],
  [J("jeddah-to-riyadh")]: [J("jeddah-to-dammam"), J("jeddah-to-abha")],
  [J("riyadh-to-jeddah")]: [J("dammam-to-jeddah"), J("abha-to-jeddah")],
  [J("jeddah-to-alula")]: [J("alula-to-jeddah")],
  [J("riyadh-to-dammam")]: [J("jeddah-to-dammam"), J("dammam-to-jeddah")],
  [J("dammam-to-riyadh")]: [J("dammam-to-jeddah")],
  [J("riyadh-to-abha")]: [J("jeddah-to-abha"), J("abha-to-jeddah")],
  [J("alula-to-riyadh")]: [J("alula-to-jeddah")],
  [`${C}/dammam`]: [J("jeddah-to-dammam"), J("dammam-to-jeddah")],
  [`${C}/abha`]: [J("jeddah-to-abha"), J("abha-to-jeddah")],
  [`${C}/jazan`]: [J("jeddah-to-jazan"), J("jazan-to-jeddah")],
  [`${T}/alula`]: [J("alula-to-jeddah")],
  [I]: [J("jeddah-to-dammam"), J("dammam-to-jeddah"), J("jeddah-to-jazan"), J("jazan-to-jeddah"), J("jeddah-to-abha"), J("abha-to-jeddah"), J("alula-to-jeddah")],
};
