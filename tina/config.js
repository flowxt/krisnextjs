// // tina/config.js
// const defineConfig = require("tinacms").defineConfig;

// module.exports = defineConfig({
//   branch: "main", // ou master, selon votre branche principale
//   clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
//   token: process.env.TINA_TOKEN || "",
//   build: {
//     outputFolder: "admin",
//     publicFolder: "public",
//   },
//   media: {
//     tina: {
//       mediaRoot: "images",
//       publicFolder: "public",
//     },
//   },
//   schema: {
//     collections: [
//       {
//         name: "article",
//         label: "Articles",
//         path: "content/blog",
//         format: "mdx",
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Titre",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "string",
//             name: "description",
//             label: "Description",
//             required: true,
//           },
//           {
//             type: "datetime",
//             name: "date",
//             label: "Date de publication",
//             required: true,
//           },
//           {
//             type: "string",
//             name: "categories",
//             label: "Catégorie",
//           },
//           {
//             type: "image",
//             name: "image",
//             label: "Image principale",
//           },
//           {
//             type: "rich-text",
//             name: "body",
//             label: "Contenu",
//             isBody: true,
//           },
//         ],
//       },
//     ],
//   },
// });
