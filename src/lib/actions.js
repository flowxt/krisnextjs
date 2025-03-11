"use server";
import {
  getAllArticles as getAll,
  getArticleBySlug as getBySlug,
} from "./posts";

export async function getAllArticles() {
  return getAll();
}

export async function getArticleBySlug(slug) {
  return getBySlug(slug);
}
