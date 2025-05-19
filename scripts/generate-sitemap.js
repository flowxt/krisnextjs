const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

async function generateSitemap() {
  try {
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

    // Récupération des articles de blog
    const blogDir = path.join(process.cwd(), "content/blog");
    const files = fs.readdirSync(blogDir);

    // Préparer le contenu XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Ajouter les routes statiques
    for (const route of routes) {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${baseUrl}${route.path}</loc>\n`;
      sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
      sitemap += `    <changefreq>${route.changeFreq}</changefreq>\n`;
      sitemap += `    <priority>${route.priority}</priority>\n`;
      sitemap += `  </url>\n`;
    }

    // Ajouter les articles de blog
    for (const file of files) {
      if (file.endsWith(".md")) {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);
        const slug = file.replace(".md", "");

        const articleDate = data.date
          ? new Date(data.date).toISOString()
          : currentDate;

        sitemap += `  <url>\n`;
        sitemap += `    <loc>${baseUrl}/blog/${slug}</loc>\n`;
        sitemap += `    <lastmod>${articleDate}</lastmod>\n`;
        sitemap += `    <changefreq>monthly</changefreq>\n`;
        sitemap += `    <priority>0.7</priority>\n`;
        sitemap += `  </url>\n`;
      }
    }

    sitemap += `</urlset>`;

    // Écrire le fichier sitemap.xml
    fs.writeFileSync(path.join(process.cwd(), "public/sitemap.xml"), sitemap);
    console.log(
      "Sitemap généré avec succès à l'emplacement: public/sitemap.xml"
    );

    // Mettre à jour robots.txt pour référencer le nouveau sitemap
    const robotsPath = path.join(process.cwd(), "public/robots.txt");
    let robotsContent = fs.readFileSync(robotsPath, "utf8");

    // Remplacer la référence du sitemap
    robotsContent = robotsContent.replace(
      /Sitemap: .+/g,
      `Sitemap: ${baseUrl}/sitemap.xml`
    );

    fs.writeFileSync(robotsPath, robotsContent);
    console.log("robots.txt mis à jour avec succès.");
  } catch (error) {
    console.error("Erreur lors de la génération du sitemap:", error);
  }
}

generateSitemap();
