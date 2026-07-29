import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Developers Code",
  description: "Aviso de privacidad de Developers Code. Conoce cómo protegemos tus datos y tu información personal.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Aviso de Privacidad | Developers Code",
    description: "Aviso de privacidad de Developers Code. Conoce cómo protegemos tus datos y tu información personal.",
    url: "https://developers-code.vercel.app/privacidad",
  },
  twitter: {
    title: "Aviso de Privacidad | Developers Code",
    description: "Aviso de privacidad de Developers Code. Conoce cómo protegemos tus datos y tu información personal.",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
