import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './PrequalificationForm.module.css';

// Interfaz para definir la estructura de los datos del formulario
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  annualIncome: number | '';
  loanAmount: number | '';
  agreedToTerms: boolean;
}

// Estado inicial del formulario
const initialState: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  annualIncome: '',
  loanAmount: '',
  agreedToTerms: false,
};

/**
 * Componente de formulario para la precalificación de un cliente.
 * Recopila información personal y financiera.
 */
const PrequalificationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Manejador para cambios en los inputs de texto y número
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Función para validar el formulario antes del envío
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName) newErrors.firstName = 'El nombre es requerido.';
    if (!formData.lastName) newErrors.lastName = 'El apellido es requerido.';
    if (!formData.email) newErrors.email = 'El email es requerido.';
    // if (!formData.annualIncome) newErrors.annualIncome = 'El ingreso anual es requerido.';
    // if (!formData.agreedToTerms) newErrors.agreedToTerms = 'Debes aceptar los términos y condiciones.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue

    if (validateForm()) {
      console.log('Formulario enviado con éxito:', formData);
      // Aquí iría la lógica para enviar los datos a una API
      alert('¡Gracias por tu solicitud! Hemos recibido tus datos.');
      // Opcional: Resetear el formulario después del envío
      setFormData(initialState);
    } else {
      console.log('El formulario contiene errores.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Formulario de Precalificación</h2>
      <p>Completa tus datos para ver si precalificas.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">Nombre</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Apellido</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Teléfono (Opcional)</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="annualIncome">Ingreso Anual (USD)</label>
            <input type="number" id="annualIncome" name="annualIncome" value={formData.annualIncome} onChange={handleChange} required />
            {errors.annualIncome && <span className={styles.errorText}>{errors.annualIncome}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="loanAmount">Monto del Préstamo Deseado (USD)</label>
            <input type="number" id="loanAmount" name="loanAmount" value={formData.loanAmount} onChange={handleChange} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} required />
            Acepto los términos y condiciones
          </label>
          {errors.agreedToTerms && <span className={styles.errorText}>{errors.agreedToTerms}</span>}
        </div>
        <button type="submit" className={styles.submitButton}>
          Verificar Precalificación
        </button>
      </form>
    </div>
  );
};

export default PrequalificationForm;