import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { marked } from "marked";

// Fonction locale pour récupérer un article par son slug
async function getArticleData(slug) {
  try {
    const postsDirectory = path.join(process.cwd(), "content/blog");
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
        tags: data.tags || [], // Ajoutez cette ligne
        publicationDate: data.date,
        content: content,
        featuredImage: data.image
          ? {
              data: {
                attributes: {
                  // Ajouter un slash si l'image n'en a pas déjà un
                  url: data.image.startsWith("/")
                    ? data.image
                    : `/${data.image}`,
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

export default async function ArticlePage({ params }) {
  // Attendre la résolution des params dans Next.js 15
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;

  const article = await getArticleData(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Article non trouvé</div>
      </div>
    );
  }

  const {
    Title,
    description,
    content,
    featuredImage,
    categories,
    publicationDate,
    tags,
  } = article.attributes;

  const imageUrl = featuredImage?.data?.attributes?.url;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20 ">
      <article className="max-w-4xl mx-auto px-4">
        {imageUrl && (
          <div className="relative h-96 mb-8 rounded-2xl overflow-hidden shadow-xl mt-11">
            <Image
              src={imageUrl}
              alt={Title || "Image de l'article"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1536px) 100vw, 1536px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        )}

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
              {Title}
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            {categories && (
              <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                {categories}
              </span>
            )}
            {publicationDate && (
              <time className="text-sm text-gray-500">
                {new Intl.DateTimeFormat("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                }).format(new Date(publicationDate))}
              </time>
            )}
          </div>

          {description && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          )}

          <div className="prose prose-lg prose-purple max-w-none">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
          </div>
          {/* Section pour afficher les tags */}
          {tags && tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full hover:bg-purple-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
