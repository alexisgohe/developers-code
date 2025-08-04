'use client';

import emailjs from '@emailjs/browser';
import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'sonner';
import styles from './PrequalificationForm.module.css';

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

      // EmailJS espera un objeto plano, por lo que convertimos los arrays a strings.
      // Asegúrate de que estas claves coincidan con las variables en tu plantilla de EmailJS.
      const templateParams = {
        ...formData,
        digitalPresence: formData.digitalPresence.join(', '),
        goals: formData.goals.join(', '),
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast.success('¡Gracias por tu información! Nos pondremos en contacto pronto.');
      setFormData(initialState); // Opcional: resetear el formulario
      setCurrentSection(1); // Volver al inicio del formulario
    } catch (error) {
      // console.error('Error al enviar el correo:', error);
      toast.error('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>🟦 Datos de contacto</h3>
            <div className={styles.formGroup}>
              <label>Nombre completo</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label>Teléfono (preferente WhatsApp)</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label>Correo electrónico</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label>Nombre del negocio (si aplica)</label>
              <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} />
            </div>
            
            <div className={styles.formGroup}>
              <label>Ciudad / Estado</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
              {errors.location && <span className={styles.error}>{errors.location}</span>}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>🟩 Situación actual del negocio</h3>
            
            <div className={styles.formGroup}>
              <label>¿Cuál es tu giro o actividad principal?</label>
              <textarea name="businessType" value={formData.businessType} onChange={handleChange} rows={3} />
              {errors.businessType && <span className={styles.error}>{errors.businessType}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label>¿Cuántas personas trabajan actualmente en tu negocio?</label>
              <select name="employees" value={formData.employees} onChange={handleChange}>
                <option value="Solo yo">Solo yo</option>
                <option value="2 a 5 personas">2 a 5 personas</option>
                <option value="6 a 10 personas">6 a 10 personas</option>
                <option value="Más de 10">Más de 10</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label>¿Tienes actualmente alguna presencia digital activa? (Puedes marcar varias)</label>
              <div className={styles.checkboxGroup}>
                {digitalPresenceOptions.map(option => (
                  <label key={option} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="digitalPresence"
                      value={option}
                      checked={formData.digitalPresence.includes(option)}
                      onChange={handleCheckboxChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>🟨 Necesidad y urgencia</h3>
            
            <div className={styles.formGroup}>
              <label>¿Qué tipo de solución estás buscando?</label>
              <select name="solutionType" value={formData.solutionType} onChange={handleChange}>
                <option value="">Selecciona una opción</option>
                {solutionTypeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label>¿Cuál es el mayor problema que tienes hoy en tu negocio relacionado con tu operación digital?</label>
              <textarea name="mainProblem" value={formData.mainProblem} onChange={handleChange} rows={3} />
            </div>
            
            <div className={styles.formGroup}>
              <label>¿Qué tan urgente es resolver este problema?</label>
              <select name="urgency" value={formData.urgency} onChange={handleChange}>
                <option value="Alta urgencia (menos de 30 días)">Alta urgencia (menos de 30 días)</option>
                <option value="Mediana urgencia (1 a 3 meses)">Mediana urgencia (1 a 3 meses)</option>
                <option value="Estoy explorando opciones, sin prisa">Estoy explorando opciones, sin prisa</option>
              </select>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>🟥 Inversión y experiencia previa</h3>
            
            <div className={styles.formGroup}>
              <label>¿Has invertido antes en desarrollo web o sistemas?</label>
              <select name="previousExperience" value={formData.previousExperience} onChange={handleChange}>
                <option value="Sí, con buen resultado">Sí, con buen resultado</option>
                <option value="Sí, pero fue una mala experiencia">Sí, pero fue una mala experiencia</option>
                <option value="No, sería la primera vez">No, sería la primera vez</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label>¿Cuál es tu presupuesto aproximado para este proyecto?</label>
              <select name="budget" value={formData.budget} onChange={handleChange}>
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
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>🟪 Objetivos y percepción de valor</h3>
            
            <div className={styles.formGroup}>
              <label>¿Qué esperas lograr con este proyecto?</label>
              <div className={styles.checkboxGroup}>
                {goalsOptions.map(option => (
                  <label key={option} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="goals"
                      value={option}
                      checked={formData.goals.includes(option)}
                      onChange={handleCheckboxChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label>¿Qué te haría sentir que esta inversión realmente valió la pena?</label>
              <textarea name="valuePerception" value={formData.valuePerception} onChange={handleChange} rows={3} />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Formulario de Evaluación de Necesidades Digitales</h2>
      
      <div className={styles.progressBar}>
        {[1, 2, 3, 4, 5].map(section => (
          <div 
            key={section}
            className={`${styles.progressStep} ${currentSection >= section ? styles.active : ''}`}
            onClick={() => currentSection > section && setCurrentSection(section)}
          >
            {section}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit}>
        {renderSection()}
        
        <div className={styles.navigationButtons}>
          {currentSection > 1 && (
            <button type="button" onClick={handlePrev} className={styles.secondaryButton}>
              Anterior
            </button>
          )}

          {currentSection < 5 && (
            <button type="button" onClick={handleNext} className={styles.primaryButton}>
              Siguiente
            </button>
          )}

          {currentSection == 5 && (
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PrequalificationForm;