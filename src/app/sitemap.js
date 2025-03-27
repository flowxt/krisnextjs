export default async function sitemap() {
  // URL de base du site
  const baseUrl = "https://krislavoixdesanges.com";

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

  return staticRoutes;
}
