const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export async function fetchAPI(path) {
  try {
    const requestUrl = `${STRAPI_URL}/api${path}`;
    console.log("URL:", requestUrl);
    console.log("Token présent:", !!STRAPI_TOKEN);

    const response = await fetch(requestUrl, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Status:", response.status);
      console.error("Status Text:", response.statusText);
      throw new Error(`Erreur API: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Données reçues:", data);
    return data;
  } catch (error) {
    console.error("Erreur détaillée:", error);
    return null;
  }
}

export async function getArticles() {
  const data = await fetchAPI("/articles?populate=*");

  if (!data?.data) {
    console.log("Pas de données reçues");
    return [];
  }

  return data.data.map((article) => {
    const articleData = article.attributes || article;
    return {
      id: article.id || articleData.id,
      attributes: {
        Title: articleData.Title,
        description: articleData.description,
        slug: articleData.slug,
        featuredImage: articleData.featuredImage,
        categories: articleData.categories,
        publicationDate: articleData.publicationDate,
        content: articleData.content,
      },
    };
  });
}

export async function getArticleBySlug(slug) {
  const data = await fetchAPI(
    `/articles?filters[slug][$eq]=${slug}&populate=*`
  );

  if (!data?.data?.[0]) {
    console.log("Article non trouvé pour le slug:", slug);
    return null;
  }

  const article = data.data[0];

  return {
    id: article.id,
    attributes: {
      ...article,
      featuredImage: article.featuredImage,
      Title: article.Title,
      description: article.description,
      slug: article.slug,
      categories: article.categories,
      publicationDate: article.publicationDate,
      content: article.content,
    },
  };
}
