import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { PrequalificationForm } from '@/components/contacto/PrequalificationForm';

export const metadata: Metadata = {
  title: "Contacto | Developers Code",
  description: "Completa nuestro formulario de precalificación para conocer más sobre tu proyecto y cómo podemos ayudarte.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Developers Code",
    description: "Completa nuestro formulario de precalificación para conocer más sobre tu proyecto y cómo podemos ayudarte.",
    url: "https://developers-code.vercel.app/contacto",
  },
  twitter: {
    title: "Contacto | Developers Code",
    description: "Completa nuestro formulario de precalificación para conocer más sobre tu proyecto y cómo podemos ayudarte.",
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#00023f] flex items-center justify-center py-16 px-4 relative overflow-hidden">
      
      {/* 🧠 BACKGROUND ALIGNADO A LANDING */}
      <div className="fixed inset-0 -z-10 bg-white">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,2,63,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,2,63,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        
        {/* Orbes */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#19a4b7]/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-[#f36523]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* <Link href="/" className="inline-flex items-center text-gray-500 hover:text-[#19a4b7] mb-6 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
          Volver al inicio
        </Link> */}
        
        <PrequalificationForm />
      </div>
    </div>
  );
}