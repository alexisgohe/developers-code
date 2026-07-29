import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formulario de Contacto | Developers Code",
  description: "Envíanos tus datos y cuéntanos sobre tu proyecto. Te contactamos en menos de 24 horas.",
  alternates: {
    canonical: "/formulario",
  },
  openGraph: {
    title: "Formulario de Contacto | Developers Code",
    description: "Envíanos tus datos y cuéntanos sobre tu proyecto. Te contactamos en menos de 24 horas.",
    url: "https://developers-code.vercel.app/formulario",
  },
  twitter: {
    title: "Formulario de Contacto | Developers Code",
    description: "Envíanos tus datos y cuéntanos sobre tu proyecto. Te contactamos en menos de 24 horas.",
  },
};

export default function FormularioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
