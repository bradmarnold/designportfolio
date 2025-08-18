export type Project = {
  title: string;
  slug: string;
  summary: string;
  image: string;
  tags: string[];
  date: string;
  roles: string[];
  tools: string[];
  content: string; // markdown allowed
  gallery?: string[];
};

export const projects: Project[] = [
  {
    title: "Button-Fly 501s Pattern Recreation",
    slug: "501s",
    summary: "Drafting standard American jeans with button fly. Research on historical details, felled seams, pocket bags.",
    image: "/images/projects/501s-cover.svg",
    tags: ["Pattern Design", "Research", "Sustainability"],
    date: "2025-08-01",
    roles: ["Designer", "Patternmaker"],
    tools: ["Seamly2D", "Laser cutter"],
    content: `
**Goal.** Recreate button-fly 501s using historically accurate drafting.
**Sustainability.** Laser nesting reduces waste in denim and pocketing.
**Process.** Draft blocks, grade, cut, sew. Fit test and iterate.
**Next steps.** Refine grading and publish a student kit.`,
    gallery: [
      "/images/projects/501s/gallery-1.jpg",
      "/images/projects/501s/gallery-2.jpg"
    ]
  },
  {
    title: "Type 3 Denim Jacket Pattern",
    slug: "type3-jacket",
    summary: "Armscye sizing study, yoke and pleats, cuff and waistband details with historical notes.",
    image: "/images/projects/type3-cover.svg",
    tags: ["Pattern Design", "Research"],
    date: "2025-08-01",
    roles: ["Designer", "Patternmaker"],
    tools: ["Seamly2D", "Laser cutter"],
    content: `
**Focus.** Type 3 block, armscye and sleeve mobility, pleat and waistband geometry.
**Notes.** Context on design evolution and fit expectations.
**Results.** Muslin to denim prototype.`,
    gallery: [
      "/images/projects/type3/gallery-1.jpg",
      "/images/projects/type3/gallery-2.jpg"
    ]
  },
  {
    title: "Seamly2D Web App Mini",
    slug: "seamly-web",
    summary: "A web reference and light edit tool for students who do not have a laptop with them.",
    image: "/images/projects/seamly-cover.svg",
    tags: ["Web Tools", "Teaching"],
    date: "2025-08-01",
    roles: ["Developer"],
    tools: ["Next.js", "TypeScript"],
    content: `
**Problem.** Staff and students are sometimes away from a laptop.
**Solution.** Web app with quick drafting references and simple edits.
**Roadmap.** Add more measurements, export paths, and examples.`,
    gallery: ["/images/projects/seamlyweb/gallery-1.jpg"]
  },
  {
    title: "Aquaponics Sensor Suite with AI Coach",
    slug: "aquaponics-sensors",
    summary: "Sensors with an AI assistant that recommends feeding time based on TDS spikes and fish age.",
    image: "/images/projects/aquaponics-cover.svg",
    tags: ["Sensors", "AI", "Sustainability"],
    date: "2025-08-01",
    roles: ["Builder", "Developer"],
    tools: ["Raspberry Pi", "Python"],
    content: `
**Hardware.** pH, TDS, temperature, flow. Raspberry Pi logging.
**Software.** Dashboard and basic analytics. AI coach suggests next feeding.
**Next.** Calibrate and prototype auto feeder.`,
    gallery: [
      "/images/projects/aquaponics/gallery-1.jpg",
      "/images/projects/aquaponics/gallery-2.jpg"
    ]
  },
  {
    title: "Cloud Chamber with Wood Base",
    slug: "cloud-chamber",
    summary: "Wood base used for insulation after heat leakage through aluminum limited minimum temperature.",
    image: "/images/projects/cloud-chamber-cover.svg",
    tags: ["Research", "Fabrication"],
    date: "2025-08-01",
    roles: ["Builder"],
    tools: ["Peltier modules", "Woodworking"],
    content: `
**Story.** Learned in physics class. Tried Peltier coolers. Aluminum frame leaked heat.
**Fix.** Wood base improved insulation due to trapped air in grain.
**Result.** Lower stable temperature and clearer trails.`,
    gallery: [
      "/images/projects/cloudchamber/gallery-1.jpg",
      "/images/projects/cloudchamber/gallery-2.jpg"
    ]
  },
  {
    title: "CNC Spatulas and Burger Press",
    slug: "cnc-spatula-press",
    summary: "CAD to CNC plates and half-inch pins turned on a CNC lathe. Hand finished. Local DFW product.",
    image: "/images/projects/cnc-tools-cover.svg",
    tags: ["Fabrication"],
    date: "2025-08-02",
    roles: ["Designer", "Fabricator"],
    tools: ["CAD", "CNC router", "CNC lathe"],
    content: `
**Process.** CAD files, plate layout, CNC cutting, pin turning, edge finishing.
**Status.** Photos incoming tomorrow.
**Plan.** Small batch for DFW cooks.`,
    gallery: []
  }
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
