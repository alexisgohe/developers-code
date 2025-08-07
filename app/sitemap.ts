import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://developers-code.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://developers-code.vercel.app/prequalification',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // Alta prioridad - es tu página de conversión
    },
    {
      url: 'https://developers-code.vercel.app/servicios',
      lastModified: new Date(),
      changeFrequency: 'monthly', 
      priority: 0.8, // Muy importante para SEO
    },
    {
      url: 'https://developers-code.vercel.app/portafolio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7, // Importante para credibilidad
    },
    {
      url: 'https://developers-code.vercel.app/contacto',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6, // Importante pero más estático
    },
    // Comentadas hasta que las crees:
    // {
    //   url: 'https://developers-code.vercel.app/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ]
}