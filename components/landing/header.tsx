"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Demos", href: "#demos" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = (packageName: string) => {
    const message = `Hola, quiero cotizar un ${packageName}`
    const url = `https://wa.me/525651392730?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-serif text-xl md:text-2xl"
          >
            <img
              src="/logo-negro.png"
              className="w-[50px]"
              alt="Logo"
            />
            Developers Code
            <span className="text-[oklch(0.45_0.08_145)]">
              Moments
            </span>
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[oklch(0.45_0.02_60)] hover:text-[oklch(0.25_0.02_60)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button className="rounded-full px-6 bg-[oklch(0.45_0.08_145)] text-[oklch(0.99_0.005_80)] hover:bg-[oklch(0.45_0.08_145)]/90"
              onClick={() => handleWhatsAppClick("paquete personalizado")}
            >
              Cotizar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[oklch(0.45_0.02_60)] hover:text-[oklch(0.25_0.02_60)] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="rounded-full mt-2 bg-[oklch(0.45_0.08_145)] text-[oklch(0.99_0.005_80)] hover:bg-[oklch(0.45_0.08_145)]/90">
                Cotizar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
