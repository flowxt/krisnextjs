/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      // Redirection pour les anciennes URL de Wix (news)
      {
        source: "/news/:path*",
        destination: "/",
        permanent: true,
      },
      // Redirection pour les anciennes URL de Wix (service)
      {
        source: "/service/:path*",
        destination: "/",
        permanent: true,
      },
      // Redirection pour /oracle
      {
        source: "/oracle",
        destination: "/",
        permanent: true,
      },
      // Redirection pour /les-packs
      {
        source: "/les-packs",
        destination: "/",
        permanent: true,
      },
      // Redirection pour /service-page (déjà partiellement couvert par /service/:path*)
      {
        source: "/service-page/:path*",
        destination: "/",
        permanent: true,
      },
      // Redirection pour /avis-clients
      {
        source: "/avis-clients",
        destination: "/",
        permanent: true,
      },
      // Redirection pour /lotion
      {
        source: "/lotion",
        destination: "/",
        permanent: true,
      },
      // Redirection pour /kris
      {
        source: "/kris",
        destination: "/",
        permanent: true,
      },
      // Redirection pour /prestations
      {
        source: "/prestations",
        destination: "/",
        permanent: true,
      },
      // Ajouter d'autres patterns d'URL selon les besoins
    ];
  },
};

export default nextConfig;
