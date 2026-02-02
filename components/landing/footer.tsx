import { Instagram, Facebook, MessageCircle, Mail, Heart, Link } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/developers_code_consultoria/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/people/Developers-Code/61578370091244/?sk=about", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/525651392730?text=Hola%20quiero%20una%20invitación%20digital", label: "WhatsApp" },
  { icon: Mail, href: "mailto:hola.developerscode@gmail.com?subject=Quiero%20mi%20invitación%20digital", label: "Email" },
]

const footerLinks = [
  { label: "Paquetes", href: "#paquetes" },
  { label: "Demos", href: "#demos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="bg-[oklch(0.25_0.02_60)] text-[oklch(0.97_0.01_80)] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Developers Code Moments</h3>
            <p className="text-[oklch(0.97_0.01_80)]/60 text-sm leading-relaxed mb-6">
              Creamos invitaciones digitales elegantes y personalizadas para hacer de tus 
              celebraciones momentos inolvidables.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[oklch(0.97_0.01_80)]/10 flex items-center justify-center hover:bg-[oklch(0.97_0.01_80)]/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[oklch(0.97_0.01_80)]/60 hover:text-[oklch(0.97_0.01_80)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-[oklch(0.97_0.01_80)]/60">
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                +52 (565) 139-2730
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hola.developerscode@gmail.com
              </p>
            </div>
          <div className="mt-4 text-sm text-[oklch(0.97_0.01_80)]/60">
            <h4 className="font-medium mb-4">Otros servicios</h4>
            <a
              target="_blank"
              href="/"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Link className="h-4 w-4" />
              <span>Consultoría de desarrollo web</span>
            </a>
          </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[oklch(0.97_0.01_80)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[oklch(0.97_0.01_80)]/40 text-sm">
            © {new Date().getFullYear()} Developers Code. Todos los derechos reservados.
          </p>
          <p className="text-[oklch(0.97_0.01_80)]/40 text-sm flex items-center gap-1">
            Hecho con <Heart className="h-4 w-4 text-red-400" /> en México
          </p>
        </div>
      </div>
    </footer>
  )
}
