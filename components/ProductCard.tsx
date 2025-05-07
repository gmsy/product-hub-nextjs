"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { urlFor } from "@/utils/sanity";

interface SanityProduct {
  _id: string;
  name: string;
  slug: { current: string };
  image: any;
  logo: any;
  keyFeatures: string[];
  description: string;
  title?: string;
}

interface ProductCardProps {
  product: SanityProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, slug, image, logo, keyFeatures, description, title } = product;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <article className="bg-[rgb(var(--card-bg))] rounded-xl overflow-hidden border border-[rgb(var(--border-color))] hover:shadow-md transition-shadow">
      <div className="p-4">
        {/* Header with Menu */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-3 overflow-hidden border border-[rgb(var(--border-color))]">
              <div className="p-1.5">
                {" "}
                {/* Added padding here */}
                {logo ? (
                  <Image
                    src={urlFor(logo).width(25).height(25).url()}
                    alt={`${name} logo`}
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-primary-700 text-xs font-bold">
                    {name.charAt(0)}
                  </span>
                )}
              </div>
            </div>
            <div>
              <h2 className="font-bold text-[rgb(var(--text-primary))]">
                {title}
              </h2>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                {name}
              </p>
            </div>
          </div>

          {/* Three-dot menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 rounded-full"
              aria-label="More options"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 dark:text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-[rgb(var(--card-bg))] border border-[rgb(var(--border-color))] z-10">
                <div className="py-1">
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-[rgb(var(--text-primary))]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-[rgb(var(--text-secondary))]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Hide this post
                  </button>
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-[rgb(var(--text-primary))]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-[rgb(var(--text-secondary))]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mb-3">
          {/* Clickable description with hover effect */}
          <Link href={`/products/${slug.current}`} className="group">
            <p className="text-[rgb(var(--text-primary))] mb-3 group-hover:underline">
              {description && description.length > 120
                ? `${description.substring(0, 120)}...`
                : description}
            </p>
          </Link>

          {/* Clickable image with hover effect */}
          <Link href={`/products/${slug.current}`} className="group block">
            <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-3">
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                {image && (
                  <Image
                    src={urlFor(image).width(800).height(450).url()}
                    alt={`${name}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </Link>

          {/* Key Features as Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {keyFeatures?.map((feature, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "var(--tag-bg, #e5e7eb)",
                  color: "var(--tag-text, #1f2937)",
                }}
                className="inline-block px-2 py-1 rounded-full text-xs"
              >
                #{feature.replace(/\s+/g, "")}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between border-t border-[rgb(var(--border-color))] pt-3">
          <div className="flex space-x-4">
            <button className="text-[rgb(var(--text-secondary))]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </button>
            <button className="text-[rgb(var(--text-secondary))]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                ></path>
              </svg>
            </button>
            <button className="text-[rgb(var(--text-secondary))]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <button className="text-[rgb(var(--text-secondary))]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                ></path>
              </svg>
            </button>
          </div>

          <Button
            href={`/products/${slug.current}`}
            variant="primary"
            className="text-sm px-3 py-1"
          >
            Learn More
          </Button>
        </div>
      </div>
    </article>
  );
}
