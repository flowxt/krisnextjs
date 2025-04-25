import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des articles" },
      { status: 500 }
    );
  }
}

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
