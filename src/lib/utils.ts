import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "USD", notation = "compact" } = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}
export function constructMetadata({
  title = "DigitalMali - the marketplace for gardening tools and plants",
  description = "DigitalMali is an marketplace for high-quality gardening tools and plants.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const baseUrl = "https://digitalmali-production.up.railway.app";
  const absoluteImageUrl = `${baseUrl}${image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: absoluteImageUrl,
          alt: description, // Add alt text for the image
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl], // Use absolute image URL
      creator: "@_Anurag__Pathak",
    },
    icons,
    metadataBase: new URL(baseUrl),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
