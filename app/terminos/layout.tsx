import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Developers Code",
  description: "Términos y condiciones de nuestros servicios de desarrollo de software y consultoría.",
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    title: "Términos y Condiciones | Developers Code",
    description: "Términos y condiciones de nuestros servicios de desarrollo de software y consultoría.",
    url: "https://developers-code.vercel.app/terminos",
  },
  twitter: {
    title: "Términos y Condiciones | Developers Code",
    description: "Términos y condiciones de nuestros servicios de desarrollo de software y consultoría.",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
