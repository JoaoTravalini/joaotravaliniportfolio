import { Suspense, useCallback, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';
import Fox from '../models/Fox';
import {
  CONTACT_FORM_COOLDOWN_MS,
  CONTACT_FORM_LIMITS,
  validateContactForm,
} from '../utils/security.js';

const initialFormState = { name: '', email: '', message: '', website: '' };

const Contact = ({ t }) => {
  const formRef = useRef(null);
  const lastSubmitAt = useRef(0);
  const [form, setForm] = useState(initialFormState)
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (isLoading) return;

    const now = Date.now();

    if (now - lastSubmitAt.current < CONTACT_FORM_COOLDOWN_MS) {
      showAlert({ text: t.contact.validation.cooldown, type: 'danger' });
      return;
    }

    const validation = validateContactForm(form);

    if (validation.isBot) {
      showAlert({ text: t.contact.success, type: 'success' });
      setForm(initialFormState);
      return;
    }

    if (!validation.isValid) {
      showAlert({ text: t.contact.validation.invalid, type: 'danger' });
      return;
    }

    setIsLoading(true);
    setCurrentAnimation('hit');

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsLoading(false);
      setCurrentAnimation('idle');
      showAlert({ text: t.contact.error, type: 'danger' });
      return;
    }

    lastSubmitAt.current = now;

    emailjs.send(
      serviceId,
      templateId,
      {
        form_name: validation.normalized.name,
        to_name: "João Paulo Motta Travalini",
        form_email: validation.normalized.email,
        to_email: 'joao.m.travalini@gmail.com',
        message: validation.normalized.message
      },
      publicKey
    ).then(() => {
      setIsLoading(false);
      showAlert({ text: t.contact.success, type: 'success' })

      setTimeout(() => {
        setCurrentAnimation('idle');
        hideAlert();
        setForm(initialFormState);
      }, 3000)
    }).catch(() => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      showAlert({ text: t.contact.error, type: 'danger' })
    })
  }, [form, hideAlert, isLoading, showAlert, t.contact.error, t.contact.success, t.contact.validation.cooldown, t.contact.validation.invalid]);

  const handleFocus = useCallback(() => setCurrentAnimation('walk'), []);
  const handleBlur = useCallback(() => setCurrentAnimation('idle'), []);

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100%]">
      {alert.show && <Alert {...alert} t={t.alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">{t.contact.title}</h1>

        <form ref={formRef} className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            {t.contact.nameLabel}
            <input type="text" name="name" className="input" placeholder={t.contact.namePlaceholder} required minLength={CONTACT_FORM_LIMITS.nameMin} maxLength={CONTACT_FORM_LIMITS.nameMax} autoComplete="name" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className="text-black-500 font-semibold">
            {t.contact.emailLabel}
            <input type="email" name="email" className="input" placeholder={t.contact.emailPlaceholder} required maxLength={CONTACT_FORM_LIMITS.emailMax} autoComplete="email" value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className="text-black-500 font-semibold">
            {t.contact.messageLabel}
            <textarea name="message" rows={4} className="textarea" placeholder={t.contact.messagePlaceholder} required minLength={CONTACT_FORM_LIMITS.messageMin} maxLength={CONTACT_FORM_LIMITS.messageMax} value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className="contact-honeypot" aria-hidden="true">
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
          </label>
          <button type="submit" className="btn disabled:cursor-not-allowed disabled:opacity-70" disabled={isLoading} aria-busy={isLoading} onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? t.contact.sending : t.contact.submit}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: 'high-performance' }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Fox currentAnimation={currentAnimation} position={[0.5, 0.35, 0]} rotation={[12.6, -0.6, 0]} scale={[0.5, 0.5, 0.5]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
