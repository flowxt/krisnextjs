"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArticleCard({ article }) {
  if (!article?.attributes) {
    console.log("Article invalide:", article);
    return null;
  }

  const {
    Title,
    description,
    slug,
    featuredImage,
    categories,
    publicationDate
  } = article.attributes;

  // Avec TinaCMS, l'URL de l'image est directement utilisable sans préfixe
  const imageUrl = featuredImage?.data?.attributes?.url || null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48">
          {imageUrl && (
            <Image
              src={imageUrl} // Utiliser directement l'URL
              alt={Title || 'Article image'}
              fill
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {categories && (
              <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                {categories}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {Title}
          </h3>
          <p className="text-gray-600 line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {publicationDate && new Date(publicationDate).toLocaleDateString("fr-FR", {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="text-purple-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
              Lire plus →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Carte d'article