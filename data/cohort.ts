import rawData from "@/cohort-data.json";

export type CohortBatch = "Visionaries" | "Innovators";

export type CohortFellow = {
  id: number;
  name: string;
  shortBio: string;
  fullBio: string;
  portfolioUrl: string | null;
  photoUrl: string | null;
  photoCandidates: string[];
  city: string;
  batch: CohortBatch;
  batchLabel: string;
  score: number | null;
  initials: string;
};

type RawFellow = {
  "Sl. No.": number | null;
  Name: string;
  "Brief Description": string[];
  "Portfolio Link": string;
  Photo: string;
  City: string;
  "Batch Name": string;
  "Remarks (if any)": string;
};

const BATCH_META: Record<CohortBatch, { label: string; batchNumber: 1 | 2 }> = {
  Visionaries: { label: "Batch 1", batchNumber: 1 },
  Innovators: { label: "Batch 2", batchNumber: 2 },
};

function extractDriveId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match?.[1] ?? null;
}

export function drivePhotoCandidates(photo: string, size = 600): string[] {
  const id = extractDriveId(photo);
  if (!id) return [];
  return [
    `https://lh3.googleusercontent.com/d/${id}=w${size}`,
    `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`,
    `https://drive.google.com/uc?export=view&id=${id}`,
  ];
}

export function driveThumbnailUrl(photo: string, size = 600): string | null {
  return drivePhotoCandidates(photo, size)[0] ?? null;
}

function parseScore(remarks: string): number | null {
  const trimmed = remarks.trim();
  if (!trimmed) return null;
  const score = Number.parseFloat(trimmed);
  return Number.isFinite(score) && score >= 0 && score <= 10 ? score : null;
}

function cleanText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function getInitials(name: string): string {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function normalizeFellow(raw: RawFellow, index: number): CohortFellow | null {
  const batch = raw["Batch Name"] as CohortBatch;
  if (batch !== "Visionaries" && batch !== "Innovators") return null;

  const name = cleanText(raw.Name);
  if (!name || name.toLowerCase().startsWith("cohort")) return null;

  const descriptions = (raw["Brief Description"] ?? []).map((d) => cleanText(d)).filter(Boolean);

  const shortBio = descriptions[1] || descriptions[0] || "";
  const fullBio = descriptions[0] || shortBio;
  const portfolio = cleanText(raw["Portfolio Link"]);
  const city = cleanText(raw.City);
  const photoCandidates = drivePhotoCandidates(raw.Photo);
  const photoUrl = photoCandidates[0] ?? null;

  return {
    id: raw["Sl. No."] ?? index + 1,
    name,
    shortBio,
    fullBio,
    portfolioUrl: portfolio || null,
    photoUrl,
    photoCandidates,
    city,
    batch,
    batchLabel: BATCH_META[batch].label,
    score: parseScore(raw["Remarks (if any)"] ?? ""),
    initials: getInitials(name),
  };
}

export const COHORT_BATCHES = [
  {
    id: "Visionaries" as const,
    ...BATCH_META.Visionaries,
  },
  {
    id: "Innovators" as const,
    ...BATCH_META.Innovators,
  },
];

export const COHORT_FELLOWS: CohortFellow[] = (rawData as RawFellow[])
  .map((item, index) => normalizeFellow(item, index))
  .filter((item): item is CohortFellow => item !== null)
  .sort((a, b) => a.id - b.id);

export function getFellowsByBatch(batch: CohortBatch): CohortFellow[] {
  return COHORT_FELLOWS.filter((fellow) => fellow.batch === batch);
}
