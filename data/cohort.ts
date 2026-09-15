import rawData from "@/cohort-data.json";

export type CohortBatchId = 1 | 2 | 3 | 4;

export type CohortFellow = {
  id: number;
  name: string;
  shortBio: string;
  fullBio: string;
  portfolioUrl: string | null;
  photoUrl: string | null;
  photoCandidates: string[];
  city: string;
  batch: CohortBatchId;
  batchLabel: string;
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

export const COHORT_BATCHES: {
  id: CohortBatchId;
  label: string;
  href: string;
}[] = [
  { id: 1, label: "Batch 1", href: "/cohort?batch=1" },
  { id: 2, label: "Batch 2", href: "/cohort?batch=2" },
  { id: 3, label: "Batch 3", href: "/cohort?batch=3" },
  { id: 4, label: "Batch 4", href: "/cohort?batch=4" },
];

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

function cleanText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/** Ensure portfolio links open externally (e.g. surajmishra.io → https://surajmishra.io). */
function normalizePortfolioUrl(value: string): string | null {
  const raw = cleanText(value);
  if (!raw) return null;
  if (/^(https?:|mailto:|tel:)/i.test(raw)) return raw;
  if (raw.startsWith("//")) return `https:${raw}`;
  return `https://${raw}`;
}

function getInitials(name: string): string {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function isMarkerRow(raw: RawFellow): boolean {
  const name = cleanText(raw.Name).toLowerCase();
  return name.startsWith("cohort");
}

function markerBatch(raw: RawFellow): CohortBatchId | null {
  const name = cleanText(raw.Name).toLowerCase();
  if (name.includes("4")) return 4;
  if (name.includes("3")) return 3;
  if (name.includes("2")) return 2;
  if (name.includes("1")) return 1;
  return null;
}

function buildFellows(): CohortFellow[] {
  let currentBatch: CohortBatchId = 1;
  const fellows: CohortFellow[] = [];

  (rawData as RawFellow[]).forEach((raw, index) => {
    if (isMarkerRow(raw)) {
      const next = markerBatch(raw);
      if (next) currentBatch = next;
      return;
    }

    const name = cleanText(raw.Name);
    if (!name) return;

    const descriptions = (raw["Brief Description"] ?? []).map((d) => cleanText(d)).filter(Boolean);

    const shortBio = descriptions[1] || descriptions[0] || "";
    const fullBio = descriptions[0] || shortBio;
    const portfolioUrl = normalizePortfolioUrl(raw["Portfolio Link"]);
    const city = cleanText(raw.City);
    const photoCandidates = drivePhotoCandidates(raw.Photo);

    fellows.push({
      id: raw["Sl. No."] ?? index + 1,
      name,
      shortBio,
      fullBio,
      portfolioUrl,
      photoUrl: photoCandidates[0] ?? null,
      photoCandidates,
      city,
      batch: currentBatch,
      batchLabel: `Batch ${currentBatch}`,
      initials: getInitials(name),
    });
  });

  return fellows.sort((a, b) => a.id - b.id);
}

export const COHORT_FELLOWS: CohortFellow[] = buildFellows();

export function getFellowsByBatch(batch: CohortBatchId): CohortFellow[] {
  return COHORT_FELLOWS.filter((fellow) => fellow.batch === batch);
}

export function parseBatchParam(value: string | null | undefined): CohortBatchId {
  const n = Number(value);
  if (n === 2 || n === 3 || n === 4) return n;
  return 1;
}
