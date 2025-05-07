import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { Metadata } from "next";
import { client } from "@/utils/sanity";

interface ProductPageParams {
  params: {
    slug: string;
  };
}

interface ProductType {
  _id: string;
  name: string;
  title: string;
  slug: string;
  image: string;
  logo: string;
  keyFeatures: string[];
  description: string;
  features: string[];
  cta: string;
}

async function getProduct(slug: string): Promise<ProductType> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      "logo": logo.asset->url,
      keyFeatures,
      description,
      features,
      cta
    }`,
    { slug }
  );
}

export async function generateMetadata({
  params,
}: ProductPageParams): Promise<Metadata> {
  const product = await getProduct(params.slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} | Productivity Tools`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      type: "article",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `https://product-hub-nextjs.vercel.app/products/${product.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "product"]{
    "slug": slug.current
  }`);

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageParams) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <article className="w-full mt-8">
      <div className="max-w-full mx-auto px-4">
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
                  {product.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="bg-[rgb(var(--card-bg))] shadow rounded-xl overflow-hidden border border-[rgb(var(--border-color))]">
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-3 overflow-hidden border border-[rgb(var(--border-color))]">
                    <div className="p-2">
                      <Image
                        src={product.logo || product.image}
                        alt={`${product.name} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))]">
                      {product.title}
                    </h1>
                    <p className="text-[rgb(var(--text-secondary))]">
                      {product.name}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-6">
                  <div className="flex items-center text-[rgb(var(--text-secondary))]">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>2.5K</span>
                  </div>
                  <div className="flex items-center text-[rgb(var(--text-secondary))]">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      ></path>
                    </svg>
                    <span>342</span>
                  </div>
                  <div className="flex items-center text-[rgb(var(--text-secondary))]">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                    <span>128</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose max-w-none mb-8 dark:prose-invert">
              <p className="text-lg text-[rgb(var(--text-primary))] mb-6">
                {product.description}
              </p>

              {/* Featured Image */}
              <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6">
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={product.image}
                    alt={`${product.title}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-4">
                Key Features
              </h2>

              <ul className="space-y-3 mb-8">
                {product.keyFeatures.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-500 mt-1 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[rgb(var(--text-primary))]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button variant="primary" className="px-8 py-3 text-lg">
                  {product.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
