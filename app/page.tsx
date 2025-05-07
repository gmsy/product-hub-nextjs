import ProductList from "@/components/ProductList";
import RightSidebar from "@/components/RightSidebar";
import { client } from "@/utils/sanity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 5 Productivity Tools for 2025 - ProductHub",
  description:
    "Discover the most powerful productivity applications that will revolutionize your workflow this year.",
  openGraph: {
    title: "Top 5 Productivity Tools for 2025 - ProductHub",
    description:
      "Discover the most powerful productivity applications that will revolutionize your workflow this year.",
    type: "website",
    images: [
      {
        url: "/images/featured-top-5.png",
        width: 1200,
        height: 630,
        alt: "Top 5 Productivity Tools for 2025",
      },
    ],
    url: "https://product-hub-nextjs.vercel.app",
    siteName: "ProductHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 5 Productivity Tools for 2025",
    description:
      "Discover the most powerful productivity applications that will revolutionize your workflow this year.",
    images: ["/images/featured-top-5.png"],
    creator: "@producthub",
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const searchQuery = searchParams.search || "";

  const products = await client.fetch(`*[_type == "product"] {
    _id,
    name,
    logo,
    title,
    slug,
    "image": image.asset->url,
    keyFeatures,
    description
  }`);

  return (
    <div className="flex w-full">
      <section className="flex-grow py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
            Top 5 Productivity Tools for 2025
          </h1>
          <p className="text-lg text-[rgb(var(--text-secondary))]">
            Discover the most powerful productivity applications that will
            revolutionize your workflow this year. From task management to team
            collaboration, these tools are designed to help you work smarter,
            not harder.
          </p>
        </div>

        <ProductList products={products} searchQuery={searchQuery} />
      </section>
      <RightSidebar />
    </div>
  );
}
