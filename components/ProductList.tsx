"use client";

import { useState, useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductList({ products, searchQuery = "" }) {
  const [sortBy, setSortBy] = useState("name-asc");
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const filteredProducts = products.filter((product) =>
    !localSearchQuery
      ? true
      : product.name.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
        product.title.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(localSearchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "newest":
        return a._id.localeCompare(b._id) * -1;
      default:
        return 0;
    }
  });

  return (
    <>
      <div className="mb-6 flex justify-between items-center p-3 bg-[rgb(var(--card-bg))] rounded-lg border border-[rgb(var(--border-color))]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="pl-10 w-32 sm:w-64 bg-[rgb(var(--card-bg))] text-sm text-[rgb(var(--text-primary))] rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder={isMobile ? "" : "Filter products..."}
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          {!isMobile && (
            <label
              htmlFor="sortBy"
              className="mr-2 text-sm text-[rgb(var(--text-secondary))]"
            >
              Sort by:
            </label>
          )}
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[rgb(var(--card-bg))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border-color))] rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {searchQuery && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[rgb(var(--text-primary))]">
            Search results for: "{searchQuery}"
          </h2>
        </div>
      )}

      <div className="space-y-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="text-center p-8 bg-[rgb(var(--card-bg))] rounded-lg border border-[rgb(var(--border-color))]">
            <p className="text-[rgb(var(--text-secondary))]">
              No products found matching "{localSearchQuery}"
            </p>
          </div>
        )}
      </div>
    </>
  );
}
