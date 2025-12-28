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

// Génération dynamique des métadonnées pour chaque article
export async function generateMetadata({ params }) {
  // Attendre la résolution des params dans Next.js 15
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  
  // Récupérer les données de l'article
  const article = await getArticleData(slug);

  if (!article) {
    return {
      title: "Article non trouvé",
      description: "Cet article n'existe pas ou a été déplacé",
    };
  }

  const { Title, description, categories, featuredImage } = article.attributes;
  const imageUrl = featuredImage?.data?.attributes?.url;

  return {
    title: Title,
    description: description,
    openGraph: {
      title: Title,
      description: description,
      url: `https://www.krislavoixdesanges.com/blog/${slug}`,
      type: "article",
      images: imageUrl
        ? [{ url: `https://www.krislavoixdesanges.com${imageUrl}` }]
        : [],
    },
    alternates: {
      canonical: `https://www.krislavoixdesanges.com/blog/${slug}`,
    },
  };
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white py-20">
      {/* Hero Image avec overlay élégant */}
      {imageUrl && (
        <div className="relative h-[60vh] md:h-[70vh] mb-12 mt-11 overflow-hidden">
          <Image
            src={imageUrl}
            alt={Title || "Image de l'article"}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1536px) 100vw, 1536px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Contenu sur l'image */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto w-full px-4 pb-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {categories && (
                  <span className="text-sm font-semibold text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                    {categories}
                  </span>
                )}
                {publicationDate && (
                  <time className="text-sm text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    {new Intl.DateTimeFormat("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC",
                    }).format(new Date(publicationDate))}
                  </time>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                {Title}
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Contenu de l'article */}
      <article className="max-w-4xl mx-auto px-4">
        {/* Description avec style amélioré */}
        {description && (
          <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 shadow-lg">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              {description}
            </p>
          </div>
        )}

        {/* Contenu principal avec styles améliorés */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-12">
          <div className="prose prose-lg prose-purple max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-a:text-purple-600 prose-li:text-gray-800 prose-code:text-gray-900 prose-headings:font-heading prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-purple-200 prose-h3:text-2xl prose-h3:mt-6 prose-blockquote:border-l-4 prose-blockquote:border-purple-400 prose-blockquote:bg-purple-50 prose-blockquote:py-2 prose-img:rounded-xl prose-img:shadow-lg !text-gray-800">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
          </div>
        </div>

        {/* Section Tags avec design moderne */}
        {tags && tags.length > 0 && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-purple-100 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏷️</span>
              <h3 className="text-xl font-bold text-gray-900 font-heading">
                Tags associés
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-purple-700 text-sm font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Appel à l'action en fin d'article */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-3 font-heading">
            ✨ Cet article vous a plu ?
          </h3>
          <p className="text-lg mb-6 text-purple-100">
            Découvrez tous mes accompagnements personnalisés
          </p>
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Découvrir mes services
          </a>
        </div>
      </article>
    </div>
  );
}
