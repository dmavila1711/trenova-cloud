import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "src/content/apuntes");

export type ApunteMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTimeMin: number;
};

export type Apunte = ApunteMeta & {
  content: string;
};

async function listMdxFiles(): Promise<string[]> {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    return files.filter((f) => f.endsWith(".mdx"));
  } catch {
    return [];
  }
}

function parseApunte(filename: string, source: string): Apunte {
  const slug = filename.replace(/\.mdx$/, "");
  const { data, content } = matter(source);
  const stats = readingTime(content);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    readingTimeMin: Math.max(1, Math.ceil(stats.minutes)),
    content,
  };
}

export async function getAllApuntes(): Promise<ApunteMeta[]> {
  const files = await listMdxFiles();
  const apuntes = await Promise.all(
    files.map(async (filename) => {
      const source = await fs.readFile(
        path.join(CONTENT_DIR, filename),
        "utf-8",
      );
      const { content, ...meta } = parseApunte(filename, source);
      void content;
      return meta;
    }),
  );
  return apuntes.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getApunteBySlug(slug: string): Promise<Apunte | null> {
  try {
    const source = await fs.readFile(
      path.join(CONTENT_DIR, `${slug}.mdx`),
      "utf-8",
    );
    return parseApunte(`${slug}.mdx`, source);
  } catch {
    return null;
  }
}

const MONTHS_ES = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];

export function formatApunteDate(iso: string): string {
  const date = new Date(iso);
  if (isNaN(date.getTime())) return iso;
  return `${date.getUTCDate()} ${MONTHS_ES[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
