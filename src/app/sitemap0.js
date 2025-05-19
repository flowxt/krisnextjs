import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function sitemap() {
  // URL de base du site
  const baseUrl = "https://www.krislavoixdesanges.com";

  // Date actuelle pour lastModified
  const currentDate = new Date().toISOString();

  // Liste des routes statiques avec leurs priorités
  const routes = [
    { path: "", priority: 1.0, changeFreq: "weekly" }, // Page d'accueil (/)
    { path: "/services", priority: 0.9, changeFreq: "monthly" },
    { path: "/soins", priority: 0.9, changeFreq: "monthly" },
    { path: "/patrice", priority: 0.8, changeFreq: "monthly" },
    { path: "/blog", priority: 0.8, changeFreq: "weekly" },
    { path: "/partenaires", priority: 0.7, changeFreq: "monthly" },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" },
  ];

  // Conversion des routes en format sitemap
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));

  // Récupération dynamique des articles de blog
  try {
    const blogDir = path.join(process.cwd(), "content/blog");
    const files = fs.readdirSync(blogDir);

    const blogRoutes = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);
        const slug = file.replace(".md", "");

        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: data.date
            ? new Date(data.date).toISOString()
            : currentDate,
          changeFrequency: "monthly",
          priority: 0.7,
        };
      });

    return [...staticRoutes, ...blogRoutes];
  } catch (error) {
    console.error("Erreur lors de la génération du sitemap:", error);
    return staticRoutes;
  }
}
