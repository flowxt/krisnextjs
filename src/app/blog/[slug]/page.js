"use client";
import React from "react";

import { useEffect, useState } from "react";
import { getArticleBySlug } from "@/lib/strapi";
import Image from "next/image";
import { Suspense } from "react";

function ArticleContent({ slug }) {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const data = await getArticleBySlug(slug);
        setArticle(data);
      } catch (error) {
        console.error("Erreur lors du chargement de l'article:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticle();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Chargement...</div>
      </div>
    );
  }

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
  } = article.attributes;
  const imageUrl = featuredImage?.data?.attributes?.url;
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20 mt-11">
      <article className="max-w-4xl mx-auto px-4">
        {imageUrl && strapiUrl && (
          <div className="relative h-96 mb-8 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={`${strapiUrl}${imageUrl}`}
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
            {Title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            {categories && (
              <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                {categories}
              </span>
            )}
            {publicationDate && (
              <time className="text-sm text-gray-500">
                {new Date(publicationDate).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </div>

          {description && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          )}

          <div className="prose prose-lg prose-purple max-w-none">
            {content?.map((block, index) => (
              <div key={index} className="mb-6">
                {block.children?.map((child, childIndex) => (
                  <p key={childIndex} className="text-gray-700 leading-relaxed">
                    {child.text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function ArticlePage({ params }) {
  const resolvedParams = React.use(params); // Déballage de la Promise
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl">Chargement...</div>
        </div>
      }
    >
      <ArticleContent slug={resolvedParams.slug} />
    </Suspense>
  );
}
