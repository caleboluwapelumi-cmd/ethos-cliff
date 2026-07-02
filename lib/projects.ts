import { google } from "googleapis";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  featured: boolean;
  coverImageId: string;
  galleryImageIds: string[];
  summary: string;
  problem: string;
  approach: string;
  processNotes: string;
  results: string;
  description: string;
}

export function getDriveImageUrl(fileId: string): string {
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

export async function getProjects(): Promise<Project[]> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !rawKey || !sheetId) {
    console.warn(
      "[projects] Google Sheets env vars not configured — returning empty project list"
    );
    return [];
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: email,
        // env stores \n as literal two-char escapes; convert back to real newlines
        private_key: rawKey.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Projects!A:N",
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) return [];

    return rows
      .slice(1)
      .map((row) => ({
        slug: String(row[0] ?? ""),
        title: String(row[1] ?? ""),
        client: String(row[2] ?? ""),
        category: String(row[3] ?? ""),
        year: String(row[4] ?? ""),
        featured: String(row[5] ?? "").toUpperCase() === "TRUE",
        coverImageId: String(row[6] ?? ""),
        galleryImageIds: String(row[7] ?? "")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        summary: String(row[8] ?? ""),
        problem: String(row[9] ?? ""),
        approach: String(row[10] ?? ""),
        processNotes: String(row[11] ?? ""),
        results: String(row[12] ?? ""),
        description: String(row[13] ?? ""),
      }))
      .filter((p) => p.slug.length > 0);
  } catch (err) {
    console.error("[projects] Failed to fetch from Google Sheets:", err);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug) ?? null;
}
