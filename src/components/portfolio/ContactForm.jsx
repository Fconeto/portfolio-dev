import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = (formTexts) => {
  const texts = formTexts.formTexts[0];
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
    <form ref={form} onSubmit={sendEmail} className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium opacity-70">
          {texts.nameForm}:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          className="mt-1 p-3 w-full rounded-md bg-[var(--color-highlight)] border-2 border-transparent focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 font-sans"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium opacity-70">
          {texts.email}:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 p-3 w-full rounded-md bg-[var(--color-highlight)] border-2 border-transparent focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 font-sans"
        />
      </div>
      <div className='col-span-2'>
        <label htmlFor="assunto" className=" text-sm font-medium opacity-70">
          {texts.subject}:
        </label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          required
          className="mt-1 p-3 w-full rounded-md bg-[var(--color-highlight)] border-2 border-transparent focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 font-sans"
        />
      </div>
      <div className='col-span-2'>
        <label htmlFor="mensagem" className="block text-sm font-medium opacity-70">
          {texts.message}:
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="4"
          required
          maxLength="2000"
          className="resize-none mt-1 p-3 w-full rounded-md bg-[var(--color-highlight)] border-2 border-transparent focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 font-sans"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSending}
        className="col-span-2 px-8 py-3 bg-[var(--color-accent)] text-white font-bold rounded-lg hover:opacity-80 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-sans"
      >
        {isSending ? texts.sendingButton : texts.sendButton}
      </button>

      {status === 'success' && (
        <p className="col-span-2 text-center text-green-500 font-bold mt-4">{texts.successMessage}</p>
      )}
      {status === 'error' && (
        <p className="col-span-2 text-center text-red-500 font-bold mt-4">{texts.errorMessage}</p>
      )}
    </form>
  );
};

export default ContactForm;