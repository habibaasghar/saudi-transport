import type { BlogPost } from "./types";
import { airportGuidePost, makkahTaifPost, riyadhDammamBusinessPost, riyadhJeddahRoadPost, umrahPlanPost } from "./transfer-guides-a";
import { bahrainCausewayPost, businessChauffeurPost, qatarRoadPost, uaeRoadPost } from "./transfer-guides-b";

/** Private transfer guides added 2026-11-23 (cluster /blog/private-transfers/, joined by the original twelve guides). */
export const transferGuides: BlogPost[] = [
  airportGuidePost,
  umrahPlanPost,
  riyadhJeddahRoadPost,
  riyadhDammamBusinessPost,
  makkahTaifPost,
  businessChauffeurPost,
  qatarRoadPost,
  bahrainCausewayPost,
  uaeRoadPost,
];
