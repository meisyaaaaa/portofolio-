import { useEffect } from 'react';
import { X, Printer } from 'lucide-react';
import { ACHIEVEMENTS, EXPERIENCES, PROFILE, SKILLS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/75 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto border-2 border-[#111111] bg-white p-6 sm:p-10 shadow-[8px_8px_0_#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (not printed) */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#111111] pb-4">
          <span className="font-space-mono text-xs font-bold uppercase tracking-wider text-[#111111]/70">
            CURRICULUM VITAE · PRINTABLE SHEET
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="font-space-mono brutalist-btn-shadow inline-flex items-center gap-2 border border-[#111111] bg-[#111111] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F2F1ED] cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Print / Save PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-[#F2F1ED] text-[#111111] hover:bg-[#E8392B] hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Sheet Content */}
        <div id="cv-printable-sheet" className="space-y-6 text-[#111111]">
          <div className="border-b-4 border-[#111111] pb-4">
            <h2 id="cv-modal-title" className="font-archivo-wide text-3xl sm:text-4xl">
              {PROFILE.name}
            </h2>
            <p className="font-space-mono mt-1 text-xs font-bold uppercase tracking-wider text-[#E8392B]">
              {PROFILE.tagline}
            </p>
            <p className="font-space-mono mt-2 text-xs text-[#111111]/75">
              {PROFILE.location} · {PROFILE.email}
            </p>
          </div>

          <div>
            <h3 className="font-archivo-wide text-base border-b border-[#111111] pb-1">
              PROFILE SUMMARY
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#111111]/85">
              {PROFILE.introLead} {PROFILE.introBody}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-archivo-wide text-base border-b border-[#111111] pb-1">
                EDUCATION
              </h3>
              <div className="mt-2 space-y-1 text-sm">
                <p className="font-bold">{PROFILE.education.school}</p>
                <p>
                  {PROFILE.education.track} · Score: <strong>{PROFILE.education.score}</strong>
                </p>
                <p className="font-space-mono text-xs text-[#111111]/70">
                  {PROFILE.education.period} · {PROFILE.education.city}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-archivo-wide text-base border-b border-[#111111] pb-1">
                TECHNICAL SKILLS
              </h3>
              <p className="font-space-mono mt-2 text-xs leading-relaxed text-[#111111]/85">
                {SKILLS.map((s) => s.name).join(' · ')}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-archivo-wide text-base border-b border-[#111111] pb-1">
              LEADERSHIP & PROJECT EXPERIENCE
            </h3>
            <div className="mt-3 space-y-3">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-xs border-b border-[#111111]/15 pb-2">
                  <div>
                    <p className="font-bold text-sm">{exp.role}</p>
                    <p className="text-[#111111]/75">
                      {exp.organization} — {exp.highlight}
                    </p>
                  </div>
                  <span className="font-space-mono shrink-0 font-bold text-[#E8392B]">
                    {exp.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-archivo-wide text-base border-b border-[#111111] pb-1">
              HONORS & ACHIEVEMENTS
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.title} className="text-xs">
                  <span className="font-space-mono font-bold text-[#E8392B]">[{ach.year}]</span>{' '}
                  <span className="font-bold">{ach.title}</span> — {ach.institution}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
