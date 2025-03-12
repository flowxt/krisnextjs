import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleCard from "../components/ArticleCard";
import BlogPresentation from "../components/BlogPresentation";

// Fonction locale pour obtenir les articles
async function getArticlesData() {
  const postsDirectory = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        slug,
        ...matterResult.data,
      };
    })
    .sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1;
      } else {
        return -1;
      }
    });
}

export default async function Blog() {
  // Utilisez getArticlesData au lieu de getAllArticles
  const articlesData = await getArticlesData();

  const articles = articlesData.map((article) => ({
    id: article.slug,
    attributes: {
      Title: article.title,
      description: article.description,
      slug: article.slug,
      categories: article.categories,
      publicationDate: article.date,
      featuredImage: article.image
        ? {
            data: {
              attributes: {
                url: article.image.startsWith("/")
                  ? article.image
                  : `/${article.image}`,
              },
            },
          }
        : null,
    },
  }));

  return (
    <div className="min-h-screen bg-pattern py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-11">
        <BlogPresentation />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
