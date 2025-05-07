import { client } from "@/utils/sanity";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q || "";

  const products = await client.fetch(`*[_type == "product" && (
    name match "*${query}*" || 
    title match "*${query}*" || 
    description match "*${query}*"
  )] {
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
    <div className="w-full py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <nav
          className="flex mb-4 text-sm text-[rgb(var(--text-secondary))]"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-1">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-1">/</span>
                <span className="text-[rgb(var(--text-primary))]">
                  Search results
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-6">
          Search results for: "{query}"
        </h1>

        {products.length > 0 ? (
          <div className="space-y-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-[rgb(var(--card-bg))] rounded-lg border border-[rgb(var(--border-color))]">
            <p className="text-[rgb(var(--text-secondary))]">
              No products found matching "{query}"
            </p>
            <Link
              href="/"
              className="mt-4 inline-block text-primary-500 hover:underline"
            >
              Back to home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
