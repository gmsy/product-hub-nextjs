import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--footer-bg))] border-t border-[rgb(var(--border-color))]">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              <a
                href="https://github.com/gmsy/product-hub-nextjs"
                target="_blank"
              >
                <strong>GitHub</strong>
              </a>
            </p>
          </div>
          <nav className="flex space-x-4 text-sm text-[rgb(var(--text-secondary))]">
            <Link
              href="/about"
              className="hover:text-[rgb(var(--text-primary))]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-[rgb(var(--text-primary))]"
            >
              Contact
            </Link>
            <Link href="/" className="hover:text-[rgb(var(--text-primary))]">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[rgb(var(--text-primary))]">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
