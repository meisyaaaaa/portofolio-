import { FormEvent, useEffect, useState } from 'react';
import { X, Copy, Check, Mail, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  initialSubject?: string;
  onClose: () => void;
}

export function ContactModal({ isOpen, initialSubject = '', onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubject(initialSubject);
    setSubmitted(false);
  }, [initialSubject, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard blocked
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name || 'Visitor'}`);
    const mailBody = encodeURIComponent(
      `Hi Meisya,\n\n${message}\n\nBest regards,\n${name || 'Portfolio Visitor'}`
    );
    setSubmitted(true);
    window.location.href = `mailto:${PROFILE.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/75 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto border-2 border-[#111111] bg-[#F2F1ED] p-6 sm:p-8 shadow-[8px_8px_0_#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b-2 border-[#111111] pb-4">
          <div>
            <span className="font-space-mono text-[11px] font-bold uppercase tracking-widest text-[#E8392B]">
              DIRECT DISPATCH · {PROFILE.location}
            </span>
            <h2 id="contact-modal-title" className="font-archivo-wide mt-1 text-2xl sm:text-3xl text-[#111111]">
              SEND A NOTE
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact form"
            className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] hover:bg-[#E8392B] hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Direct Email Copy Box */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-2 border-[#111111] bg-white p-3.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <Mail className="h-4 w-4 shrink-0 text-[#E8392B]" aria-hidden="true" />
            <span className="font-space-mono truncate text-xs font-bold text-[#111111]">
              {PROFILE.email}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="font-space-mono inline-flex items-center gap-1.5 border border-[#111111] bg-[#F2F1ED] px-3 py-1.5 text-[11px] font-bold uppercase text-[#111111] hover:bg-[#111111] hover:text-[#F2F1ED] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#E8392B]" aria-hidden="true" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                Copy Email
              </>
            )}
          </button>
        </div>

        {/* Brutalist Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="font-space-mono block text-[11px] font-bold uppercase tracking-wider text-[#111111]"
            >
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Andi Pratama"
              className="mt-1.5 w-full border-2 border-[#111111] bg-white px-3.5 py-2.5 text-sm text-[#111111] placeholder:text-[#111111]/40 focus:border-[#2B7FFF] focus:shadow-[3px_3px_0_#2B7FFF] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="font-space-mono block text-[11px] font-bold uppercase tracking-wider text-[#111111]"
            >
              Topic / Opportunity
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Robotics Collaboration or Scholarship / Internship"
              className="mt-1.5 w-full border-2 border-[#111111] bg-white px-3.5 py-2.5 text-sm text-[#111111] placeholder:text-[#111111]/40 focus:border-[#2B7FFF] focus:shadow-[3px_3px_0_#2B7FFF] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="font-space-mono block text-[11px] font-bold uppercase tracking-wider text-[#111111]"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your note here..."
              className="mt-1.5 w-full border-2 border-[#111111] bg-white px-3.5 py-2.5 text-sm text-[#111111] placeholder:text-[#111111]/40 focus:border-[#2B7FFF] focus:shadow-[3px_3px_0_#2B7FFF] focus:outline-none"
            />
          </div>

          {submitted && (
            <p className="font-space-mono border border-[#111111] bg-white px-3 py-2 text-xs font-bold text-[#111111]">
              Opening your email client with the pre-filled message.
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-space-mono inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#111111] underline underline-offset-4 hover:text-[#E8392B]"
            >
              Message on WhatsApp <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <button
              type="submit"
              className="font-space-mono brutalist-btn-shadow border border-[#111111] bg-[#111111] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F2F1ED] cursor-pointer"
            >
              Send via Email ↗
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
