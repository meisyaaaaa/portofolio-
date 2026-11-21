import { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import {
  ACHIEVEMENTS,
  COMPETENCIES,
  EXPERIENCES,
  IMAGES,
  PROFILE,
  PROJECTS,
  ProjectCategory,
  ProjectItem,
  SKILLS,
} from './data/portfolioData';
import { ResilientImage } from './components/ResilientImage';
import { SkillIconSvg } from './components/SkillIcons';
import { ProjectModal } from './components/ProjectModal';
import { CvModal } from './components/CvModal';
import { ContactModal } from './components/ContactModal';

const PROJECT_FILTERS: Array<'All' | ProjectCategory> = [
  'All',
  'Robotics',
  'Digital Media',
  'Leadership',
  'Literacy',
];

export default function App() {
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [expandedExpId, setExpandedExpId] = useState<string | null>(null);
  const [projectFilter, setProjectFilter] = useState<'All' | ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [frameInspected, setFrameInspected] = useState(false);

  const selectedSkill = SKILLS.find((s) => s.id === selectedSkillId) ?? null;

  const filteredProjects =
    projectFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === projectFilter);

  const openContactWithSubject = (subject = '') => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen text-[#111111]">
      {/* Top Navigation — Strict 3-Zone Contract */}
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-40 border-b border-[#111111]/15 bg-[#F2F1ED]/95 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:gap-8 sm:px-6">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#"
            className="font-archivo-wide whitespace-nowrap shrink-0 text-sm tracking-tight text-[#111111]"
          >
            MR<span className="text-[#E8392B]">.</span>26
          </a>

          {/* Zone 2: 4 concise single-line nav links */}
          <ul className="font-space-mono flex items-center gap-4 overflow-x-auto text-[11px] font-bold uppercase tracking-wider sm:gap-6 sm:text-xs">
            <li className="shrink-0">
              <a
                href="#about"
                className="whitespace-nowrap hover:text-[#E8392B] hover:underline underline-offset-4 transition-colors"
              >
                About
              </a>
            </li>
            <li className="shrink-0">
              <a
                href="#projects"
                className="whitespace-nowrap hover:text-[#E8392B] hover:underline underline-offset-4 transition-colors"
              >
                Projects
              </a>
            </li>
            <li className="shrink-0">
              <a
                href="#skills"
                className="whitespace-nowrap hover:text-[#E8392B] hover:underline underline-offset-4 transition-colors"
              >
                Skills
              </a>
            </li>
            <li className="shrink-0">
              <a
                href="#achievements"
                className="whitespace-nowrap hover:text-[#E8392B] hover:underline underline-offset-4 transition-colors"
              >
                Achievements
              </a>
            </li>
          </ul>

          {/* Zone 3: 1 Primary CTA */}
          <button
            type="button"
            onClick={() => openContactWithSubject('')}
            className="font-space-mono whitespace-nowrap shrink-0 border border-[#111111] bg-[#111111] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#F2F1ED] hover:bg-[#E8392B] hover:border-[#E8392B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B7FFF] transition-colors cursor-pointer sm:text-xs"
          >
            Contact
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Poster Header */}
        <header className="mx-auto max-w-6xl px-4 pt-8 pb-10 sm:px-6 sm:pt-12">
          {/* Meta Topline */}
          <div className="font-space-mono mb-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#111111] sm:text-xs">
            <span>{PROFILE.tagline}</span>
            <span>{PROFILE.year}</span>
          </div>

          {/* Giant Display Title Split with Centered Sticker Portrait */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="flex w-full items-center justify-center gap-2 sm:gap-4 md:gap-6">
              <h1 className="font-archivo-wide text-[13vw] leading-[0.85] text-[#111111] sm:text-[10vw] md:text-[8.5vw] lg:text-[112px]">
                PORTFO
              </h1>

              {/* Centered Halftone/Illustrated Sticker Portrait */}
              <div className="relative z-10 shrink-0 -rotate-3 transition-transform duration-200 hover:rotate-0">
                <ResilientImage
                  src={IMAGES.stickerPortrait}
                  alt="Meisya Ramadhani illustrated sticker portrait"
                  fallbackLabel="MEISYA"
                  className="sticker-outline-white h-24 w-20 object-cover grayscale contrast-125 sm:h-36 sm:w-28 md:h-44 md:w-36"
                />
              </div>

              <h1 className="font-archivo-wide text-[13vw] leading-[0.85] text-[#111111] sm:text-[10vw] md:text-[8.5vw] lg:text-[112px]">
                LIO
              </h1>
            </div>

            {/* Handwritten Signature & Curved SVG Arrow */}
            <div className="mt-2 flex w-full max-w-xl items-start justify-end pr-4 sm:pr-12">
              <div className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="-mt-4 text-[#111111]"
                  fill="none"
                  height="42"
                  viewBox="0 0 48 42"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 36C25 34 14 23 11 6M11 6L5 13M11 6L19 11"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-caveat -rotate-4 text-[26px] font-bold leading-none text-[#111111]">
                  {PROFILE.name}
                </span>
              </div>
            </div>
          </div>

          {/* Starburst Geometric Icons Row */}
          <div aria-hidden="true" className="mt-8 flex items-center justify-center gap-6 text-[#111111]">
            <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
              <path d="M12 1L13.8 8.2L20.5 4.5L15.8 10.2L23 12L15.8 13.8L20.5 19.5L13.8 15.8L12 23L10.2 15.8L3.5 19.5L8.2 13.8L1 12L8.2 10.2L3.5 4.5L10.2 8.2L12 1Z" />
            </svg>
            <svg fill="currentColor" height="22" viewBox="0 0 24 24" width="22">
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
            <svg fill="currentColor" height="22" viewBox="0 0 24 24" width="22">
              <path d="M12 2C14.2 2 16 3.8 16 6C16 7.5 15.1 8.8 13.8 9.5C14.5 8.2 15.8 7.3 17.3 7.3C19.5 7.3 21.3 9.1 21.3 11.3C21.3 13.5 19.5 15.3 17.3 15.3C15.8 15.3 14.5 14.4 13.8 13.1C15.1 13.8 16 15.1 16 16.6C16 18.8 14.2 20.6 12 20.6C9.8 20.6 8 18.8 8 16.6C8 15.1 8.9 13.8 10.2 13.1C9.5 14.4 8.2 15.3 6.7 15.3C4.5 15.3 2.7 13.5 2.7 11.3C2.7 9.1 4.5 7.3 6.7 7.3C8.2 7.3 9.5 8.2 10.2 9.5C8.9 8.8 8 7.5 8 6C8 3.8 9.8 2 12 2Z" />
            </svg>
          </div>
        </header>

        {/* About, Bio, Skills & Experience Section */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1.25fr_1fr] lg:gap-8">
            {/* Column 1: Designer Selection Frame */}
            <div className="flex flex-col items-center lg:items-start">
              <button
                type="button"
                onClick={() => setFrameInspected((prev) => !prev)}
                aria-pressed={frameInspected}
                title="Toggle canvas coordinate readout"
                className="group relative inline-block border-[1.5px] border-[#2B7FFF] p-1 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2B7FFF] cursor-pointer"
              >
                {/* Floating dimension badge */}
                <span className="font-space-mono absolute -top-6 left-0 bg-[#2B7FFF] px-1.5 py-0.5 text-[10px] font-bold text-white whitespace-nowrap">
                  {frameInspected ? 'X:48 Y:120 · 320 × 490 px' : '320 × 490 px'}
                </span>

                {/* 8 square resize handles */}
                <span className="absolute -top-1 -left-1 h-[7px] w-[7px] border border-[#2B7FFF] bg-white" />
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-[7px] w-[7px] border border-[#2B7FFF] bg-white" />
                <span className="absolute -top-1 -right-1 h-[7px] w-[7px] border border-[#2B7FFF] bg-white" />
                <span className="absolute top-1/2 -left-1 -translate-y-1/2 h-[7px] w-[7px] border border-[#2B7FFF] bg-white" />
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 h-[7px] w-[7px] border border-[#2B7FFF] bg-white" />
                <span className="absolute -bottom-1 -left-1 h-[7px] w-[7px] border border-[#2B7FFF] bg-white" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[7px] w-[7px] border border-[#2B7FFF] bg-white" />
                <span className="absolute -bottom-1 -right-1 h-[7px] w-[7px] border border-[#2B7FFF] bg-white" />

                <ResilientImage
                  src={IMAGES.fullBodyPortrait}
                  alt="Meisya Ramadhani full-body portrait"
                  fallbackLabel="MEISYA RAMADHANI"
                  className={`h-[420px] w-[270px] object-cover transition-transform duration-200 ${
                    frameInspected ? 'scale-[0.985]' : ''
                  }`}
                />
              </button>

              <p className="font-caveat mt-3 flex items-center gap-1.5 text-xl font-bold text-[#111111]">
                <MapPin className="h-4 w-4 text-[#E8392B]" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </p>
            </div>

            {/* Column 2: Hello & Education */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="font-archivo-wide text-5xl leading-none text-[#111111] sm:text-6xl">
                  HELLO
                </h2>
                <p className="mt-4 text-base font-bold leading-relaxed text-[#111111]">
                  {PROFILE.introLead}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#111111]/75">
                  {PROFILE.introBody}
                </p>
              </div>

              {/* Education Block */}
              <div className="mt-8">
                <h3 className="font-archivo-wide border-b-2 border-[#111111] pb-1.5 text-xl text-[#111111]">
                  EDUCATION
                </h3>
                <div className="mt-3 space-y-1">
                  <p className="text-sm font-bold text-[#111111]">
                    {PROFILE.education.school}
                  </p>
                  <p className="text-xs font-medium text-[#111111]/80">
                    {PROFILE.education.track} · Final Score:{' '}
                    <span className="font-bold text-[#E8392B]">
                      {PROFILE.education.score}
                    </span>
                  </p>
                  <p className="font-space-mono text-[11px] text-[#111111]/65">
                    {PROFILE.education.period} · {PROFILE.education.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Interactive Skills & Experience */}
            <div>
              <div id="skills" className="scroll-mt-20">
                <div className="mb-3 flex items-baseline justify-between gap-2">
                  <h3 className="font-archivo-wide text-xl text-[#111111]">SKILLS</h3>
                  <span className="font-space-mono text-[10px] font-bold uppercase text-[#111111]/60">
                    Click tile to inspect
                  </span>
                </div>

                {/* 4x2 Sharp Brutalist Skill Grid */}
                <div className="grid grid-cols-4 gap-2.5 w-fit">
                  {SKILLS.map((skill) => {
                    const isSelected = selectedSkillId === skill.id;
                    return (
                      <button
                        key={skill.id}
                        type="button"
                        onClick={() =>
                          setSelectedSkillId(isSelected ? null : skill.id)
                        }
                        aria-pressed={isSelected}
                        title={skill.name}
                        style={{ backgroundColor: skill.bgColor }}
                        className={`brutalist-chip-shadow flex h-[46px] w-[46px] items-center justify-center border-[1.5px] p-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B7FFF] ${
                          isSelected
                            ? 'border-[#2B7FFF] ring-2 ring-[#2B7FFF]'
                            : 'border-[#111111]'
                        }`}
                      >
                        <SkillIconSvg id={skill.id} />
                      </button>
                    );
                  })}
                </div>

                {/* Inline Skill Spec Readout when clicked */}
                {selectedSkill && (
                  <div className="mt-3 border-[1.5px] border-[#111111] bg-white p-3 shadow-[3px_3px_0_#111111]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-space-mono text-xs font-bold text-[#111111]">
                        {selectedSkill.name}
                      </span>
                      <span className="font-space-mono text-[10px] font-bold uppercase text-[#E8392B]">
                        {selectedSkill.category}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[#111111]/80">
                      {selectedSkill.summary}
                    </p>
                    <p className="font-space-mono mt-1.5 text-[10px] font-bold text-[#111111]/70">
                      Applied in: {selectedSkill.usedIn}
                    </p>
                  </div>
                )}
              </div>

              {/* Experience Timeline */}
              <div className="mt-7">
                <h3 className="font-archivo-wide mb-2 text-xl text-[#111111]">
                  EXPERIENCE
                </h3>
                <div className="space-y-2 text-xs">
                  {EXPERIENCES.map((exp) => {
                    const isExpanded = expandedExpId === exp.id;
                    return (
                      <div
                        key={exp.id}
                        className="border-t-[1.5px] border-[#111111] pt-2"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedExpId(isExpanded ? null : exp.id)
                          }
                          aria-expanded={isExpanded}
                          className="flex w-full items-start justify-between gap-2 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B7FFF]"
                        >
                          <div>
                            <span className="font-space-mono text-[10px] font-bold text-[#E8392B]">
                              {exp.period}
                            </span>
                            <p className="font-bold text-[#111111] group-hover:text-[#E8392B] transition-colors">
                              {exp.role} — {exp.organization}
                            </p>
                            <p className="text-[#111111]/70">{exp.highlight}</p>
                          </div>
                          {isExpanded ? (
                            <ChevronUp
                              className="mt-1 h-4 w-4 shrink-0 text-[#111111]/60"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronDown
                              className="mt-1 h-4 w-4 shrink-0 text-[#111111]/60"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                        {isExpanded && (
                          <p className="mt-1.5 border border-[#111111]/20 bg-white/80 p-2.5 text-[11px] leading-relaxed text-[#111111]/85">
                            {exp.details}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Divider Band with Rising Cutout Portrait */}
        <section
          aria-label="Core disciplines banner"
          className="relative my-16"
        >
          {/* Centered Cutout Portrait Silhouette rising above top edge */}
          <div className="pointer-events-none relative z-20 mx-auto -mb-24 flex justify-center sm:-mb-28">
            <ResilientImage
              src={IMAGES.fullBodyPortrait}
              alt="Meisya Ramadhani cutout portrait"
              fallbackLabel="MEISYA RAMADHANI"
              className="sticker-outline-red h-48 w-40 object-cover sm:h-60 sm:w-48"
            />
          </div>

          {/* Black Torn-Paper Marquee Band */}
          <div className="torn-edge-both marquee-band relative z-10 overflow-hidden bg-[#111111] py-14 sm:py-16">
            <div className="marquee-track font-archivo-wide text-3xl tracking-tight sm:text-5xl">
              <div className="flex items-center gap-6 pr-6">
                <span className="text-[#F2F1ED]">ROBOTICS CREATOR ✦</span>
                <span className="text-outline-white">STUDENT LEADER ❖</span>
                <span className="text-[#F2F1ED]">DIGITAL MEDIA ✦</span>
                <span className="text-outline-white">LITERACY AMBASSADOR ❖</span>
              </div>
              <div aria-hidden="true" className="flex items-center gap-6 pr-6">
                <span className="text-[#F2F1ED]">ROBOTICS CREATOR ✦</span>
                <span className="text-outline-white">STUDENT LEADER ❖</span>
                <span className="text-[#F2F1ED]">DIGITAL MEDIA ✦</span>
                <span className="text-outline-white">LITERACY AMBASSADOR ❖</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects — THE WORK */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 scroll-mt-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap items-baseline gap-4">
              <h2 className="font-archivo-wide text-4xl text-[#111111] sm:text-5xl">
                THE WORK
              </h2>
              <span className="font-caveat text-2xl font-bold text-[#E8392B]">
                built, led &amp; filmed ✦
              </span>
            </div>

            {/* Interactive Filter Tabs */}
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex flex-wrap items-center gap-1.5"
            >
              {PROJECT_FILTERS.map((cat) => {
                const isActive = projectFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setProjectFilter(cat)}
                    aria-pressed={isActive}
                    className={`font-space-mono whitespace-nowrap shrink-0 border-[1.5px] border-[#111111] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B7FFF] ${
                      isActive
                        ? 'bg-[#111111] text-[#F2F1ED] shadow-[2px_2px_0_#E8392B]'
                        : 'bg-white text-[#111111] hover:bg-[#E8392B] hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-Column Staggered Scrapbook Polaroid Cards */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={`relative border-[1.5px] border-[#111111] bg-white p-6 pt-8 shadow-[5px_5px_0_#111111] transition-transform duration-200 hover:rotate-0 hover:shadow-[7px_7px_0_#E8392B] ${
                  project.tiltClass
                } ${project.staggerOffset && projectFilter === 'All' ? 'md:mt-8' : ''}`}
              >
                {/* Translucent Masking Tape Strip */}
                <div
                  aria-hidden="true"
                  className={`masking-tape absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 ${project.tapeTiltClass}`}
                />

                {/* Clean Unboxed Metadata */}
                <div className="font-space-mono mb-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold">
                  <span className="uppercase tracking-wider text-[#E8392B]">
                    {project.category}
                  </span>
                  <span className="text-[#111111]/70">
                    {project.period} · {project.role}
                  </span>
                </div>

                <h3 className="font-archivo-wide text-xl text-[#111111]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#111111]/75">
                  {project.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#111111]/15 pt-4">
                  <div className="font-space-mono flex flex-wrap gap-2 text-[11px] font-bold">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="border border-[#111111] bg-[#F2F1ED] px-2 py-0.5 text-[#111111]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="font-space-mono inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E8392B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B7FFF] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Inspect <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Core Competencies — WHAT I BRING */}
        <section id="competencies" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 flex flex-wrap items-baseline gap-4">
            <h2 className="font-archivo-wide text-4xl text-[#111111] sm:text-5xl">
              WHAT I BRING
            </h2>
            <span className="font-caveat text-2xl font-bold text-[#E8392B]">
              four pillars of contribution ✦
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPETENCIES.map((comp) => (
              <div
                key={comp.number}
                className={`brutalist-card-shadow border-2 border-[#111111] bg-white p-5 ${comp.tiltClass}`}
              >
                <span className="font-space-mono text-xs font-bold text-[#E8392B]">
                  {comp.number}
                </span>
                <h3 className="font-archivo-wide mt-2 text-lg leading-tight text-[#111111]">
                  {comp.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#111111]/75">
                  {comp.description}
                </p>
                <p className="font-space-mono mt-3 border-t border-[#111111]/15 pt-2.5 text-[11px] font-bold text-[#111111]/85">
                  {comp.tools}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Ledger — ACHIEVEMENTS */}
        <section id="achievements" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 scroll-mt-16">
          <div className="mb-8 flex flex-wrap items-baseline gap-4">
            <h2 className="font-archivo-wide text-4xl text-[#111111] sm:text-5xl">
              ACHIEVEMENTS
            </h2>
            <span className="font-caveat text-2xl font-bold text-[#E8392B]">
              milestones &amp; honors ✦
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ACHIEVEMENTS.map((ach) => (
              <div key={ach.title} className="border-t-2 border-[#111111] pt-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-space-mono inline-block bg-[#111111] px-2 py-0.5 text-xs font-bold text-[#F2F1ED]">
                    [{ach.year}]
                  </span>
                  <span className="font-space-mono text-[11px] font-bold uppercase text-[#E8392B]">
                    {ach.category}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-[#111111]">
                  {ach.title}
                </h3>
                <p className="text-sm text-[#111111]/70">{ach.institution}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Torn-Edge Contact Footer */}
      <footer
        id="contact"
        className="torn-edge-top mt-12 bg-[#111111] px-4 pt-16 pb-8 text-center text-[#F2F1ED] sm:px-6"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-archivo-wide text-4xl sm:text-6xl">
            LET&apos;S CONNECT <span className="text-[#E8392B]">✦</span>
          </h2>
          <p className="font-caveat mt-2 text-2xl font-bold text-[#E8392B]">
            open for opportunities, collaborations, or a quick hello :)
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openContactWithSubject('')}
              className="font-space-mono brutalist-btn-shadow bg-[#F2F1ED] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#111111] cursor-pointer whitespace-nowrap shrink-0"
            >
              EMAIL ME ↗
            </button>
            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-space-mono brutalist-btn-shadow bg-[#F2F1ED] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#111111] whitespace-nowrap shrink-0"
            >
              WHATSAPP ↗
            </a>
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="font-space-mono brutalist-btn-shadow bg-[#F2F1ED] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#111111] cursor-pointer whitespace-nowrap shrink-0"
            >
              VIEW / PRINT CV ↗
            </button>
          </div>

          {/* Bottom Footer Bar */}
          <div className="font-space-mono mt-14 flex flex-col items-center justify-between gap-2 border-t border-[#F2F1ED]/20 pt-6 text-[10px] uppercase tracking-widest text-[#F2F1ED]/70 sm:flex-row">
            <span>© 2026 MEISYA RAMADHANI · BANGKINANG KOTA, RIAU</span>
            <span>ROBOTICS · DIGITAL MEDIA · LEADERSHIP · LITERACY</span>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onContactClick={(subj) => openContactWithSubject(subj)}
      />
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      <ContactModal
        isOpen={isContactOpen}
        initialSubject={contactSubject}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
