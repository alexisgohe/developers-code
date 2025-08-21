'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

interface SimpleFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  businessName: string;
}

const initialState: SimpleFormData = {
  fullName: '',
  phone: '',
  email: '',
  location: '',
  businessName: '',
};

const businessNameOptions = [
  'Página web',
  'Sistema',
  'Ecommerce',
  'Otro',
];

const SimpleQuoteForm = () => {
  const [formData, setFormData] = useState<SimpleFormData>(initialState);
  const [errors, setErrors] = useState<Partial<SimpleFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validación en tiempo real solo para los campos requeridos
    if (['fullName', 'phone', 'businessName'].includes(name)) {
      setErrors(prev => ({
        ...prev,
        [name]: value ? undefined : 'Este campo es requerido'
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<SimpleFormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es obligatorio';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono o WhatsApp es obligatorio';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Selecciona el tipo de proyecto';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) { // Validar la última sección antes de enviar
      toast.error('Por favor, completa todos los campos requeridos antes de enviar.');
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // EmailJS espera un objeto plano, por lo que convertimos los arrays a strings.
      // Asegúrate de que estas claves coincidan con las variables en tu plantilla de EmailJS.
      const templateParams = {
        ...formData
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast.success('¡Gracias por tu información! Nos pondremos en contacto pronto.');
      setFormData(initialState); // Opcional: resetear el formulario
    } catch (error) {
      // console.error('Error al enviar el correo:', error);
      toast.error('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white flex items-center justify-center py-16 px-4">
      <div className="max-w-lg w-full mx-auto bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-lg border border-slate-700/50 p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 text-center">
          Solicita tu cotización gratis
        </h2>
        <p className="text-base text-gray-300 font-medium mb-8 text-center">
          Responde este breve formulario y te contactaremos pronto.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-300 font-medium mb-2">Nombre completo *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Tu nombre completo"
            />
            {errors.fullName && <span className="text-red-400 text-sm">{errors.fullName}</span>}
          </div>

          <div className="space-y-2">
            <label className="block text-gray-300 font-medium mb-2">Teléfono / WhatsApp *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="+52 123 456 7890"
            />
            {errors.phone && <span className="text-red-400 text-sm">{errors.phone}</span>}
          </div>

          <div className="space-y-2">
            <label className="block text-gray-300 font-medium mb-2">Correo electrónico (opcional)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="tu@email.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-300 font-medium mb-2">Ciudad / Estado (opcional)</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Ciudad, Estado"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-300 font-medium mb-2">Tipo de proyecto que buscas *</label>
            <select
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Selecciona una opción</option>
              {businessNameOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.businessName && <span className="text-red-400 text-sm">{errors.businessName}</span>}
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold hover:from-blue-500 hover:to-green-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Enviando...
              </span>
            ) : (
              'Solicitar cotización gratis'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimpleQuoteForm;