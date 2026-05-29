import type { MetadataRoute } from "next";
import { getAllApuntes } from "@/lib/apuntes";

const SITE_URL = "https://trenovacloud.com.mx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const apuntes = await getAllApuntes();

  const apuntesEntries: MetadataRoute.Sitemap = apuntes.map((apunte) => ({
    url: `${SITE_URL}/apuntes/${apunte.slug}`,
    lastModified: apunte.date ? new Date(apunte.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/productos/atiendeia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...apuntesEntries,
  ];
}
