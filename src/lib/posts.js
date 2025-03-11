// Supprimez "use server" et utilisez des fonctions normales
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllArticles() {
  // Vérifier si le répertoire existe
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        slug,
        ...matterResult.data,
        content: matterResult.content,
      };
    });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getArticleBySlug(slug) {
  try {
    const mdPath = path.join(postsDirectory, `${slug}.mdx`);
    const mdxPath = path.join(postsDirectory, `${slug}.md`);

    let fullPath = fs.existsSync(mdPath) ? mdPath : mdxPath;

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id: slug,
      attributes: {
        Title: data.title,
        description: data.description,
        slug,
        categories: data.categories,
        publicationDate: data.date,
        content: content,
        featuredImage: data.image
          ? {
              data: {
                attributes: {
                  url: data.image,
                },
              },
            }
          : null,
      },
    };
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'article ${slug}:`,
      error
    );
    return null;
  }
}
