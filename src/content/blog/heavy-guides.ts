import type { BlogPost } from "./types";
import { carTowingPost, excavatorPrepPost, flatbedVsHydraulicPost, lowbedComparisonPost, machineryPlanningPost } from "./heavy-guides-a";
import { breakdownPost, chooseProviderPost, craneIndustrialPost, dozerLoaderPost, intercityCarPost } from "./heavy-guides-b";

/** Towing and heavy transport cluster (/blog/towing-heavy-transport/), in hub order. */
export const heavyGuides: BlogPost[] = [
  carTowingPost,
  flatbedVsHydraulicPost,
  breakdownPost,
  intercityCarPost,
  machineryPlanningPost,
  lowbedComparisonPost,
  excavatorPrepPost,
  dozerLoaderPost,
  craneIndustrialPost,
  chooseProviderPost,
];
