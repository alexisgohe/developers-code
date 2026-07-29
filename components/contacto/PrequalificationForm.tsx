'use client';

import emailjs from '@emailjs/browser';
import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'sonner';
import { Check } from 'lucide-react';

interface FormData {
  // Sección 1: Datos de contacto
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  location: string;

  // Sección 2: Situación actual
  businessType: string;
  employees: 'Solo yo' | '2 a 5 personas' | '6 a 10 personas' | 'Más de 10';
  digitalPresence: string[];

  // Sección 3: Necesidad y urgencia
  solutionType: string;
  mainProblem: string;
  urgency: 'Alta urgencia (menos de 30 días)' | 'Mediana urgencia (1 a 3 meses)' | 'Estoy explorando opciones, sin prisa';

  // Sección 4: Inversión y experiencia
  previousExperience: 'Sí, con buen resultado' | 'Sí, pero fue una mala experiencia' | 'No, sería la primera vez';
  budget: 'Menos de $5,000 MXN' | 'Entre $5,000 y $15,000 MXN' | 'Entre $15,000 y $30,000 MXN' | 'Más de $30,000 MXN' | 'No estoy seguro';

  // Sección 5: Objetivos
  goals: string[];
  valuePerception: string;
}

const initialState: FormData = {
  fullName: '',
  phone: '',
  email: '',
  businessName: '',
  location: '',
  businessType: '',
  employees: 'Solo yo',
  digitalPresence: [],
  solutionType: '',
  mainProblem: '',
  urgency: 'Estoy explorando opciones, sin prisa',
  previousExperience: 'No, sería la primera vez',
  budget: 'No estoy seguro',
  goals: [],
  valuePerception: ''
};

const digitalPresenceOptions = [
  'Sitio web',
  'Redes sociales',
  'Página de ventas / e-commerce',
  'CRM o sistema interno',
  'Ninguno'
];

const solutionTypeOptions = [
  'Sitio web nuevo',
  'Rediseño de sitio web',
  'Sistema interno (CRM, inventarios, pedidos, etc.)',
  'Automatización / Integración',
  'No estoy seguro, necesito orientación'
];

const goalsOptions = [
  'Mejorar presencia digital',
  'Generar más prospectos o ventas',
  'Mejorar procesos internos',
  'Ahorrar tiempo y automatizar tareas',
  'No estoy seguro'
];

export const PrequalificationForm = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validación en tiempo real solo para los campos requeridos de la sección actual
    if (currentSection === 1 && ['fullName', 'phone', 'email', 'location'].includes(name)) {
      setErrors(prev => ({
        ...prev,
        [name]: value ? undefined : 'Este campo es requerido'
      }));
    }
    if (currentSection === 2 && name === 'businessType') {
      setErrors(prev => ({
        ...prev,
        businessType: value ? undefined : 'Este campo es requerido'
      }));
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => {
      const currentValues = [...prev[name as keyof FormData] as string[]];
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return { ...prev, [name]: currentValues.filter(item => item !== value) };
      }
    });
  };

  const validateSection = (section: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (section === 1) {
      if (!formData.fullName) newErrors.fullName = 'Nombre completo requerido';
      if (!formData.phone) newErrors.phone = 'Teléfono requerido';
      if (!formData.email) newErrors.email = 'Email requerido';
      if (!formData.location) newErrors.location = 'Ubicación requerida';
    }

    if (section === 2) {
      if (!formData.businessType) newErrors.businessType = 'Giro del negocio requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateSection(currentSection)) {
      setCurrentSection(prev => Math.min(prev + 1, 5));
    }
  };

  const handlePrev = () => {
    setCurrentSection(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateSection(5)) { // Validar la última sección antes de enviar
      toast.error('Por favor, completa todos los campos requeridos antes de enviar.');
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const templateParams = {
        ...formData,
        digitalPresence: formData.digitalPresence.join(', '),
        goals: formData.goals.join(', '),
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast.success('¡Gracias por tu información! Nos pondremos en contacto pronto.');
      setFormData(initialState);
      setCurrentSection(1);
    } catch (error) {
      toast.error('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionTitles = ["Contacto", "Negocio", "Necesidad", "Inversión", "Objetivos"];

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#00023f] mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-[#19a4b7] rounded"></span>
              Datos de contacto
            </h3>
            
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">Nombre completo</label>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all shadow-sm"
                placeholder="Tu nombre completo"
              />
              {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">Teléfono (preferente WhatsApp)</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all shadow-sm"
                placeholder="+52 123 456 7890"
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all shadow-sm"
                placeholder="tu@email.com"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">Nombre del negocio (si aplica)</label>
              <input 
                type="text" 
                name="businessName" 
                value={formData.businessName} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all shadow-sm"
                placeholder="Nombre de tu empresa o negocio"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">Ciudad / Estado</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all shadow-sm"
                placeholder="Ciudad, Estado"
              />
              {errors.location && <span className="text-red-500 text-sm">{errors.location}</span>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#00023f] mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-[#19a4b7] rounded"></span>
              Situación actual del negocio
            </h3>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">¿Cuál es tu giro o actividad principal?</label>
              <textarea 
                name="businessType" 
                value={formData.businessType} 
                onChange={handleChange} 
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all resize-none shadow-sm"
                placeholder="Describe a qué se dedica tu negocio..."
              />
              {errors.businessType && <span className="text-red-500 text-sm">{errors.businessType}</span>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">¿Cuántas personas trabajan actualmente en tu negocio?</label>
              <select 
                name="employees" 
                value={formData.employees} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all appearance-none shadow-sm"
              >
                <option value="Solo yo">Solo yo</option>
                <option value="2 a 5 personas">2 a 5 personas</option>
                <option value="6 a 10 personas">6 a 10 personas</option>
                <option value="Más de 10">Más de 10</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-3">¿Tienes actualmente alguna presencia digital activa? (Puedes marcar varias)</label>
              <div className="space-y-3">
                {digitalPresenceOptions.map(option => (
                  <label key={option} className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-[#00023f] transition-colors">
                    <input
                      type="checkbox"
                      name="digitalPresence"
                      value={option}
                      checked={formData.digitalPresence.includes(option)}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-gray-300 text-[#19a4b7] focus:ring-[#19a4b7]"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#00023f] mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-[#f36523] rounded"></span>
              Necesidad y urgencia
            </h3>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">¿Qué tipo de solución estás buscando?</label>
              <select 
                name="solutionType" 
                value={formData.solutionType} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all shadow-sm"
              >
                <option value="">Selecciona una opción</option>
                {solutionTypeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">¿Cuál es el mayor problema que tienes hoy en tu negocio relacionado con tu operación digital?</label>
              <textarea 
                name="mainProblem" 
                value={formData.mainProblem} 
                onChange={handleChange} 
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all resize-none shadow-sm"
                placeholder="Describe tu principal desafío digital..."
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">¿Qué tan urgente es resolver este problema?</label>
              <select 
                name="urgency" 
                value={formData.urgency} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all shadow-sm"
              >
                <option value="Alta urgencia (menos de 30 días)">Alta urgencia (menos de 30 días)</option>
                <option value="Mediana urgencia (1 a 3 meses)">Mediana urgencia (1 a 3 meses)</option>
                <option value="Estoy explorando opciones, sin prisa">Estoy explorando opciones, sin prisa</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#00023f] mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-[#f36523] rounded"></span>
              Inversión y experiencia previa
            </h3>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">¿Has invertido antes en desarrollo web o sistemas?</label>
              <select 
                name="previousExperience" 
                value={formData.previousExperience} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all shadow-sm"
              >
                <option value="Sí, con buen resultado">Sí, con buen resultado</option>
                <option value="Sí, pero fue una mala experiencia">Sí, pero fue una mala experiencia</option>
                <option value="No, sería la primera vez">No, sería la primera vez</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">¿Cuál es tu presupuesto aproximado para este proyecto?</label>
              <select 
                name="budget" 
                value={formData.budget} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all shadow-sm"
              >
                <option value="Menos de $5,000 MXN">Menos de $5,000 MXN</option>
                <option value="Entre $5,000 y $15,000 MXN">Entre $5,000 y $15,000 MXN</option>
                <option value="Entre $15,000 y $30,000 MXN">Entre $15,000 y $30,000 MXN</option>
                <option value="Más de $30,000 MXN">Más de $30,000 MXN</option>
                <option value="No estoy seguro">No estoy seguro</option>
              </select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#00023f] mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-[#19a4b7] rounded"></span>
              Objetivos y próximos pasos
            </h3>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-3">¿Qué esperas lograr con este proyecto?</label>
              <div className="space-y-3">
                {goalsOptions.map(option => (
                  <label key={option} className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-[#00023f] transition-colors">
                    <input
                      type="checkbox"
                      name="goals"
                      value={option}
                      checked={formData.goals.includes(option)}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-gray-300 text-[#19a4b7] focus:ring-[#19a4b7]"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-2">¿Hay algo específico que quieras que sepamos antes de contactarte?</label>
              <textarea 
                name="valuePerception" 
                value={formData.valuePerception} 
                onChange={handleChange} 
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#00023f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#19a4b7] focus:border-transparent transition-all resize-none shadow-sm"
                placeholder="Escribe cualquier detalle adicional aquí..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-8 w-full max-w-2xl mx-auto relative z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#00023f] text-center tracking-tight">
        Formulario de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00023f] via-[#19a4b7] to-[#f36523]">Evaluación Digital</span>
      </h2>
      <p className="text-base text-gray-500 font-medium mb-8 text-center">
        Información 100% confidencial · Tiempo estimado: Solo 3 minutos
      </p>
      
      {/* Progress indicator */}
      <div className="flex justify-between md:justify-center mb-10 gap-2 md:gap-8">
        {[1, 2, 3, 4, 5].map((section, idx) => (
          <div key={section} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all duration-300 cursor-pointer border-2
              ${currentSection >= section 
                ? 'bg-[#19a4b7] text-white border-[#19a4b7] shadow-lg shadow-[#19a4b7]/30 scale-105' 
                : 'bg-white text-gray-400 border-gray-200 hover:border-[#19a4b7]/50 hover:text-[#19a4b7]'}
            `}
              onClick={() => currentSection > section && setCurrentSection(section)}
            >
              {section}
            </div>
            <span className={`text-xs mt-2 font-medium hidden md:block ${currentSection >= section ? 'text-[#00023f]' : 'text-gray-400'}`}>
              {sectionTitles[idx]}
            </span>
          </div>
        ))}
      </div>
      
      <div>
        {renderSection()}
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
          {currentSection > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-6 py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-200 border border-gray-200"
            >
              ← Anterior
            </button>
          )}
          {currentSection < 5 && (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-[#00023f] text-white font-bold hover:bg-[#19a4b7] transition-all duration-300 ml-auto shadow-lg hover:-translate-y-1"
            >
              Siguiente →
            </button>
          )}
          {currentSection === 5 && (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#00023f] to-[#19a4b7] text-white font-bold hover:opacity-90 transition-all duration-300 ml-auto shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Solicitud <Check className="w-5 h-5" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
