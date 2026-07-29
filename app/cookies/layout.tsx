import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Developers Code",
  description: "Nuestra política de cookies. Conoce cómo utilizamos las cookies para mejorar tu experiencia.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Política de Cookies | Developers Code",
    description: "Nuestra política de cookies. Conoce cómo utilizamos las cookies para mejorar tu experiencia.",
    url: "https://developers-code.vercel.app/cookies",
  },
  twitter: {
    title: "Política de Cookies | Developers Code",
    description: "Nuestra política de cookies. Conoce cómo utilizamos las cookies para mejorar tu experiencia.",
  },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
