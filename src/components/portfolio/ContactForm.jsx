import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .sendForm('service_e1gbonn', 'template_p762y4h', form.current, {
        publicKey: 'vIoZAYF7JwGM2AnNJ',
      })
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        () => {
          setStatus('error');
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium opacity-70">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          className="mt-1 p-3 w-full rounded-md bg-[var(--color-highlight)] border-2 border-transparent focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium opacity-70">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 p-3 w-full rounded-md bg-[var(--color-highlight)] border-2 border-transparent focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300"
        />
      </div>
      <div>
        <label htmlFor="assunto" className="block text-sm font-medium opacity-70">
          Assunto:
        </label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          required
          className="mt-1 p-3 w-full rounded-md bg-[var(--color-highlight)] border-2 border-transparent focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300"
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium opacity-70">
          Mensagem:
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="4"
          required
          maxLength="2000"
          className="mt-1 p-3 w-full rounded-md bg-[var(--color-highlight)] border-2 border-transparent focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSending}
        className="px-8 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:opacity-80 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSending ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      {status === 'success' && (
        <p className="text-center text-green-500 font-bold mt-4">Mensagem enviada com sucesso!</p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-500 font-bold mt-4">Erro ao enviar a mensagem. Tente novamente mais tarde.</p>
      )}
    </form>
  );
};

export default ContactForm;