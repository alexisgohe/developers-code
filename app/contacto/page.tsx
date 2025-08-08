'use client';

import emailjs from '@emailjs/browser';
import { useState, ChangeEvent, FormEvent } from 'react';

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
  budget: 'Menos de $5,000 MXN' | 'Entre $5,000 y $10,000 MXN' | 'Más de $10,000 MXN' | 'No estoy seguro';

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

const PrequalificationForm = () => {
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
    if (!validateSection(5)) {
      alert('Por favor, completa todos los campos requeridos antes de enviar.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulación del envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('¡Gracias por tu información! Nos pondremos en contacto pronto.');
      setFormData(initialState);
      setCurrentSection(1);
    } catch (error) {
      alert('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-500 rounded"></span>
              Datos de contacto
            </h3>
            
            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">Nombre completo</label>
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
              <label className="block text-gray-300 font-medium mb-2">Teléfono (preferente WhatsApp)</label>
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
              <label className="block text-gray-300 font-medium mb-2">Correo electrónico</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="tu@email.com"
              />
              {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">Nombre del negocio (si aplica)</label>
              <input 
                type="text" 
                name="businessName" 
                value={formData.businessName} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Nombre de tu empresa o negocio"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">Ciudad / Estado</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Ciudad, Estado"
              />
              {errors.location && <span className="text-red-400 text-sm">{errors.location}</span>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-green-500 rounded"></span>
              Situación actual del negocio
            </h3>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">¿Cuál es tu giro o actividad principal?</label>
              <textarea 
                name="businessType" 
                value={formData.businessType} 
                onChange={handleChange} 
                rows={3}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Describe a qué se dedica tu negocio..."
              />
              {errors.businessType && <span className="text-red-400 text-sm">{errors.businessType}</span>}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">¿Cuántas personas trabajan actualmente en tu negocio?</label>
              <select 
                name="employees" 
                value={formData.employees} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="Solo yo">Solo yo</option>
                <option value="2 a 5 personas">2 a 5 personas</option>
                <option value="6 a 10 personas">6 a 10 personas</option>
                <option value="Más de 10">Más de 10</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-3">¿Tienes actualmente alguna presencia digital activa? (Puedes marcar varias)</label>
              <div className="space-y-3">
                {digitalPresenceOptions.map(option => (
                  <label key={option} className="flex items-center gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors">
                    <input
                      type="checkbox"
                      name="digitalPresence"
                      value={option}
                      checked={formData.digitalPresence.includes(option)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700/50 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-800"
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
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-yellow-500 rounded"></span>
              Necesidad y urgencia
            </h3>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">¿Qué tipo de solución estás buscando?</label>
              <select 
                name="solutionType" 
                value={formData.solutionType} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Selecciona una opción</option>
                {solutionTypeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">¿Cuál es el mayor problema que tienes hoy en tu negocio relacionado con tu operación digital?</label>
              <textarea 
                name="mainProblem" 
                value={formData.mainProblem} 
                onChange={handleChange} 
                rows={3}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Describe tu principal desafío digital..."
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">¿Qué tan urgente es resolver este problema?</label>
              <select 
                name="urgency" 
                value={formData.urgency} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-red-500 rounded"></span>
              Inversión y experiencia previa
            </h3>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">¿Has invertido antes en desarrollo web o sistemas?</label>
              <select 
                name="previousExperience" 
                value={formData.previousExperience} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="Sí, con buen resultado">Sí, con buen resultado</option>
                <option value="Sí, pero fue una mala experiencia">Sí, pero fue una mala experiencia</option>
                <option value="No, sería la primera vez">No, sería la primera vez</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">¿Cuál es tu presupuesto aproximado para este proyecto?</label>
              <select 
                name="budget" 
                value={formData.budget} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="Menos de $5,000 MXN">Menos de $5,000 MXN</option>
                <option value="Entre $5,000 y $10,000 MXN">Entre $5,000 y $10,000 MXN</option>
                <option value="Más de $10,000 MXN">Más de $10,000 MXN</option>
                <option value="No estoy seguro">No estoy seguro</option>
              </select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-purple-500 rounded"></span>
              Objetivos y percepción de valor
            </h3>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-3">¿Qué esperas lograr con este proyecto?</label>
              <div className="space-y-3">
                {goalsOptions.map(option => (
                  <label key={option} className="flex items-center gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors">
                    <input
                      type="checkbox"
                      name="goals"
                      value={option}
                      checked={formData.goals.includes(option)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700/50 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-800"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium mb-2">¿Qué te haría sentir que esta inversión realmente valió la pena?</label>
              <textarea 
                name="valuePerception" 
                value={formData.valuePerception} 
                onChange={handleChange} 
                rows={3}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Describe qué resultados considerarías exitosos..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full mx-auto bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-lg border border-slate-700/50 p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 text-center">
          Formulario de Evaluación de Necesidades Digitales
        </h2>
        <p className="text-base text-gray-300 font-medium mb-8 text-center">
          Información 100% confidencial · Tiempo estimado: Solo 3 minutos
        </p>
        
        {/* Progress indicator */}
        <div className="flex justify-center mb-8 gap-4">
          {[1, 2, 3, 4, 5].map(section => (
            <div
              key={section}
              className={`w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all duration-300 cursor-pointer
              ${currentSection >= section ? 'bg-blue-400 text-white scale-105 shadow-lg' : 'bg-slate-700 text-gray-400 hover:bg-slate-600'}
            `}
              onClick={() => currentSection > section && setCurrentSection(section)}
            >
              {section}
            </div>
          ))}
        </div>
        
        <div>
          {renderSection()}
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-700">
            {currentSection > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-6 py-3 rounded-xl bg-slate-700 text-gray-200 font-semibold hover:bg-slate-600 transition-all duration-200 border border-slate-600"
              >
                ← Anterior
              </button>
            )}
            {currentSection < 5 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition-all duration-200 ml-auto shadow-lg hover:shadow-blue-500/25"
              >
                Siguiente →
              </button>
            )}
            {currentSection === 5 && (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold hover:from-blue-500 hover:to-green-500 transition-all duration-200 ml-auto shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Solicitud ✓'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrequalificationForm;