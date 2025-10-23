"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type FormState } from '@/actions/contactActions';
import { useEffect, useRef } from 'react';

const initialState: FormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-glow relative w-full px-6 py-3 text-lg font-semibold bg-background border-2 border-primary rounded-md transition-all duration-300 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="relative z-10">{pending ? 'Sending...' : 'Send Message'}</span>
    </button>
  );
}

const ContactPage = () => {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-glow-primary animate-neon-pulse mb-4">
          CONTACT
        </h1>
        <p className="text-lg text-muted-foreground">
          Feel free to reach out. Let's connect and create something amazing.
        </p>
      </header>

      <div className="max-w-2xl mx-auto">
        <form ref={formRef} action={formAction} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full px-4 py-2 bg-input border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full px-4 py-2 bg-input border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block w-full px-4 py-2 bg-input border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="block w-full px-4 py-2 bg-input border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            ></textarea>
          </div>
          <SubmitButton />
        </form>
        {state.message && (
          <p className={`mt-4 text-center text-sm ${state.success ? 'text-primary' : 'text-destructive'}`}>
            {state.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
