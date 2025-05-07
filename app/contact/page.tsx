import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about ProductHub and our mission to help you find the best productivity tools.",
};

export default function ContactPage() {
  return (
    <div className="flex-grow py-8 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-6">
        Contact Us
      </h1>
      <div className="prose max-w-none text-[rgb(var(--text-primary))]">
        <p className="mb-4">This is a blank contact us page.</p>
      </div>
    </div>
  );
}
