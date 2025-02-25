"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ArticleCard({ article }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <Link href={`/blog/${article.slug}`}>
        <div className="relative h-48">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-3">
            {article.categories.map((category) => (
              <span
                key={category}
                className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
          <p className="text-gray-600 line-clamp-2">{article.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {new Date(article.date).toLocaleDateString('fr-FR')}
            </span>
            <span className="text-purple-600 font-medium text-sm">Lire plus →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}