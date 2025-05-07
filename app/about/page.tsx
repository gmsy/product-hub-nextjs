import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about ProductivityHub and our mission to help you find the best productivity tools.",
};

export default function AboutPage() {
  return (
    <div className="flex-grow py-8 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-6">
        About Us
      </h1>
      <div className="prose max-w-none text-[rgb(var(--text-primary))]">
        <p className="mb-4">This is a blank about page.</p>
      </div>
    </div>
  );
}
