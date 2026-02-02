import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Benefits } from "@/components/landing/benefits"
import { Packages } from "@/components/landing/packages"
import { Demos } from "@/components/landing/demos"
import { Footer } from "@/components/landing/footer"
import { CTA } from "@/components/landing/cta"
import { Process } from "@/components/landing/process"

export default function Invitaciones() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Packages />
      <Demos />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
