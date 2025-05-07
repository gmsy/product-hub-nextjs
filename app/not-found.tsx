"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { applyStoredTheme } from "@/utils/ThemeScript";

export default function NotFound() {
  // Use state to track mounted status to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Apply theme from localStorage
    applyStoredTheme();
    setMounted(true);
  }, []);

  // Only render content after component has mounted on client
  if (!mounted) {
    return (
      <div className="flex flex-col flex-grow justify-center items-center min-h-[calc(100vh-4rem)] w-full px-4">
        {/* Loading state */}
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow justify-center items-center min-h-[calc(100vh-4rem)] w-full px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-primary-500 mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-[rgb(var(--text-primary))] mb-4">
          Page not found
        </h2>
        <p className="text-[rgb(var(--text-secondary))] mb-8">
          The page you're looking for doesn't exist or has been moved. Check the
          URL or go back to the homepage.
        </p>

        <div className="space-y-6">
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
