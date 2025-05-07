import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Top 5 Productivity Tools for 2025",
    template: "%s | Productivity Tools",
  },
  description:
    "Discover the top productivity tools for 2025 that will help you streamline your workflow and boost your efficiency.",
  keywords: [
    "productivity tools",
    "2025",
    "workflow",
    "efficiency",
    "software",
    "apps",
  ],
  openGraph: {
    title: "Top 5 Productivity Tools for 2025",
    description:
      "Discover the top productivity tools for 2025 that will help you streamline your workflow and boost your efficiency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <div className="max-w-7xl mx-auto w-full flex flex-grow">
            <Sidebar />
            {children}
          </div>
          <MobileSidebar />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
