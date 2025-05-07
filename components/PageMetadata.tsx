import { Metadata } from "next";

interface PageMetadataProps {
  title: string;
  description: string;
}

export default function PageMetadata({
  title,
  description,
}: PageMetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}
