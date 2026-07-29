import { Globe, Store, Settings } from "lucide-react"

export const SERVICIOS = [
  {
    icon: <Globe className="w-8 h-8" aria-hidden="true" />,
    title: "Landing Básica",
    description: "Ideal para emprendedores o negocios que necesitan presencia en línea.",
    features: [
      "1 sección (scroll simple)",
      "Diseño responsivo",
      "Formulario de contacto",
      "Optimización básica para buscadores",
      "Entrega en 3-5 días hábiles",
    ],
    price: "$4,500 MXN",
  },
  {
    icon: <Globe className="w-8 h-8" aria-hidden="true" />,
    title: "Landing Completa",
    description: "Para negocios establecidos que buscan destacar con una web profesional.",
    features: [
      "Hasta 5 secciones",
      "Formulario, ubicación, redes sociales",
      "Optimización SEO avanzada",
      "Animaciones sutiles",
      "Entrega en 7 días hábiles",
    ],
    price: "$8,500 MXN",
  },
  {
    icon: <Store className="w-8 h-8" aria-hidden="true" />,
    title: "Tienda en Línea",
    description: "Perfecta para emprendedores que quieren vender en línea con facilidad.",
    features: [
      "Catálogo de productos",
      "Pasarela de pago (Stripe o MercadoPago)",
      "Carrito de compras",
      "Panel básico de administración",
      "Entrega en 10-15 días hábiles",
    ],
    price: "Desde $15,000 MXN",
  },
  {
    icon: <Settings className="w-8 h-8" aria-hidden="true" />,
    title: "Sistema a la Medida",
    description: "Soluciones 100% adaptadas a tu negocio. Cotización personalizada.",
    features: [
      "Dashboard, control de usuarios, reportes",
      "Funcionalidad específica por industria",
      "Escalable y seguro",
      "Incluye consultoría técnica",
    ],
    price: "Desde $25,000 MXN",
  },
]
