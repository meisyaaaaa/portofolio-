import { useEffect } from 'react';
import { X, ArrowUpRight, Users, Calendar } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: (subject: string) => void;
}

export function ProjectModal({ project, onClose, onContactClick }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/75 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border-2 border-[#111111] bg-[#F2F1ED] p-6 sm:p-8 shadow-[8px_8px_0_#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Masking Tape Corner */}
        <div className="masking-tape absolute -top-3 left-8 h-6 w-24 -rotate-2" aria-hidden="true" />

        {/* Header Row */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-[#111111] pb-4">
          <div>
            <div className="font-space-mono flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8392B]">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#111111]/75">{project.period}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#111111]/75">{project.role}</span>
            </div>
            <h2
              id="project-modal-title"
              className="font-archivo-wide mt-2 text-2xl leading-tight text-[#111111] sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] hover:bg-[#E8392B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B7FFF] transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Metadata Bar */}
        <div className="font-space-mono mt-4 flex flex-wrap items-center gap-6 text-xs text-[#111111]/80">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#E8392B]" aria-hidden="true" />
            <span>Team: {project.teamSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#E8392B]" aria-hidden="true" />
            <span>Timeline: {project.period}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 space-y-4">
          <p className="text-sm leading-relaxed text-[#111111]/85 sm:text-base">
            {project.fullDescription}
          </p>

          {/* Outcome Box */}
          <div className="border-2 border-[#111111] bg-white p-4 shadow-[4px_4px_0_#E8392B]">
            <p className="font-space-mono text-[11px] font-bold uppercase tracking-wider text-[#E8392B]">
              Outcome & Impact
            </p>
            <p className="mt-1.5 text-sm font-bold text-[#111111]">
              {project.outcome}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="font-archivo-wide text-sm text-[#111111]">
              KEY DELIVERABLES
            </h3>
            <ul className="mt-2.5 space-y-2">
              {project.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#111111]/85"
                >
                  <span className="font-space-mono mt-0.5 text-xs font-bold text-[#E8392B]" aria-hidden="true">
                    [✓]
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-archivo-wide text-sm text-[#111111]">
              TOOLS & METHODS
            </h3>
            <div className="font-space-mono mt-2.5 flex flex-wrap gap-2 text-xs font-bold">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-[#111111] bg-white px-2.5 py-1 text-[#111111]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t-2 border-[#111111] pt-5">
          <span className="font-caveat text-xl font-bold text-[#E8392B]">
            Want to know more about this project?
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="font-space-mono border-2 border-[#111111] bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:bg-[#111111] hover:text-[#F2F1ED] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                const title = project.title;
                onClose();
                onContactClick(`Inquiry about ${title}`);
              }}
              className="font-space-mono brutalist-btn-shadow inline-flex items-center gap-1.5 border border-[#111111] bg-[#111111] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F2F1ED] cursor-pointer"
            >
              Discuss Project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
