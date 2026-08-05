import {
  ArrowUpRight,
  FileDown,
  Github,
  GithubIcon,
  Mail,
  MapPin,
  Phone,
  SquareArrowOutUpRightIcon,
} from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
import { portfolio } from '@/lib/portfolio';
import Link from 'next/link';

function SectionTitle({
  id,
  label,
  title,
  description,
  show = true,
}: {
  id?: string;
  label: string;
  title: string;
  description?: string;
  show?: boolean;
}) {
  if (!show) return null;

  return (
    <div id={id} className={id ? 'scroll-mt-28' : undefined}>
      <p className='font-mono text-xs uppercase tracking-[0.18em] text-terminal'>
        {label}
      </p>
      <h2 className='mt-3 font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl'>
        {title}
      </h2>
      {description ? (
        <p className='mt-3 max-w-2xl font-mono text-sm leading-7 text-muted-foreground'>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ExperienceSection({
  showHeading = false,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className='border-t border-white/10 bg-white/[0.015] py-16 sm:py-20'>
      <div className='section-shell'>
        <SectionTitle
          id='experience'
          show={showHeading}
          label='~/experience'
          title='Building across teams and platforms.'
          description='Professional experience across UK, USA, and Bangladeshi teams.'
        />
        <div
          className={`${showHeading ? 'mt-12' : ''} divide-y divide-white/10 border-y border-white/10`}
        >
          {portfolio.experience.map((role) => (
            <article
              key={`${role.company}-${role.period}`}
              className='grid gap-5 py-8 lg:grid-cols-[220px_1fr_1.2fr]'
            >
              <div>
                <p className='font-mono text-xs text-muted-foreground'>
                  {role.period}
                </p>
                <p className='mt-2 font-mono text-sm text-zinc-300'>
                  {role.location}
                </p>
              </div>
              <div>
                <h3 className='font-mono text-lg text-foreground'>
                  {role.title}
                </h3>
                <p className='mt-1 font-mono text-sm text-muted-foreground'>
                  {role.company}
                </p>
              </div>
              <ul className='space-y-2'>
                {role.points.map((point) => (
                  <li
                    key={point}
                    className='flex gap-3 font-mono text-sm leading-6 text-muted-foreground'
                  >
                    <span className='mt-2 size-1 shrink-0 rounded-full bg-terminal/70' />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection({
  showHeading = false,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className='section-shell py-16 sm:py-20'>
      <SectionTitle
        id='projects'
        show={showHeading}
        label='~/projects'
        title='Products shaped for real use.'
        description='Selected web and mobile work from my resume.'
      />
      <div
        className={`${showHeading ? 'mt-12' : ''} grid gap-4 md:grid-cols-2`}
      >
        {portfolio.projects.map((project, index) => (
          <article
            key={project.name}
            className='group relative flex min-h-[280px] flex-col rounded-lg border border-white/10 bg-white/[0.02] p-6 transition hover:border-terminal/25 hover:bg-white/[0.035]'
          >
            <p className='font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground'>
              {project.category}
            </p>
            <Link href={project.link} target='_blank' rel='noreferrer'>
              <h3 className='mt-4 font-mono text-xl text-foreground'>
                {project.name}
              </h3>
            </Link>
            <p className='mt-3 max-w-md font-mono text-sm leading-6 text-muted-foreground'>
              {project.description}
            </p>

            <div className='flex pt-8 flex-1 items-end justify-between gap-6'>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-muted-foreground'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex shrink-0 items-center gap-4'>
                <Link
                  href={project.source}
                  target='_blank'
                  rel='noreferrer'
                  className='text-terminal-dim hover:text-terminal'
                >
                  <GithubIcon className='size-4' />
                </Link>

                <Link
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-terminal-dim hover:text-terminal'
                >
                  <SquareArrowOutUpRightIcon className='size-4' />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className='mt-6 flex justify-end'>
        <a
          href={portfolio.github}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition hover:text-terminal'
        >
          more on GitHub <ArrowUpRight className='size-4' />
        </a>
      </div>
    </section>
  );
}

export function SkillsSection({
  showHeading = false,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className='border-t border-white/10 bg-white/[0.015] py-16 sm:py-20'>
      <div className='section-shell'>
        <SectionTitle
          id='skills'
          show={showHeading}
          label='~/skills'
          title='A practical, adaptable toolkit.'
        />
        <div
          className={`${showHeading ? 'mt-12' : ''} grid gap-0 md:grid-cols-2`}
        >
          {portfolio.skills.map((group) => (
            <div key={group.label} className='border-t border-white/10 py-6'>
              <h3 className='font-mono text-base text-zinc-200'>
                {group.label}
              </h3>
              <div className='mt-4 flex flex-wrap gap-2'>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className='rounded-md bg-white/[0.04] px-2.5 py-1.5 font-mono text-xs text-muted-foreground'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className='mt-6 border-t border-white/10 pt-6 font-mono text-sm text-muted-foreground'>
          <span className='text-zinc-300'>Languages</span> /{' '}
          {portfolio.languages.join(' · ')}
        </p>
      </div>
    </section>
  );
}

export function ContactSection({
  showHeading = false,
}: {
  showHeading?: boolean;
}) {
  return (
    <section id='contact' className='section-shell scroll-mt-28 py-16 sm:py-20'>
      <SectionTitle
        show={showHeading}
        label='~/contact'
        title="Let's build something useful."
        description='For projects or opportunities, reach out by email, phone, or GitHub.'
      />
      <div
        className={`${showHeading ? 'mt-12' : ''} grid gap-5 lg:grid-cols-2`}
      >
        <div className='rounded-lg border border-white/10 bg-white/[0.02] p-6'>
          <p className='font-mono text-sm text-muted-foreground'>
            Direct contact
          </p>
          <a
            href={`mailto:${portfolio.email}`}
            className='mt-3 block break-all font-mono text-lg text-foreground transition hover:text-terminal'
          >
            {portfolio.email}
          </a>
          <div className='mt-8 space-y-4 border-t border-white/10 pt-6 font-mono text-sm'>
            <a
              href={`tel:${portfolio.phone.replace(/\s/g, '')}`}
              className='flex items-center gap-3 text-muted-foreground transition hover:text-terminal'
            >
              <Phone className='size-4' /> {portfolio.phone}
            </a>
            <a
              href={portfolio.github}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-3 text-muted-foreground transition hover:text-terminal'
            >
              <Github className='size-4' /> github.com/hedaetul
            </a>
            <Link
              href={portfolio.resume.viewPath}
              className='flex items-center gap-3 text-muted-foreground transition hover:text-terminal'
            >
              <FileDown className='size-4' /> view resume online
            </Link>
            <a
              href={portfolio.resume.path}
              download={portfolio.resume.downloadName}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-3 text-muted-foreground transition hover:text-terminal'
            >
              <FileDown className='size-4' /> download resume.pdf
            </a>
            <span className='flex items-center gap-3 text-muted-foreground'>
              <MapPin className='size-4' /> {portfolio.location}
            </span>
            <a
              href={`mailto:${portfolio.email}`}
              className='flex items-center gap-3 text-muted-foreground transition hover:text-terminal'
            >
              <Mail className='size-4' /> send an email
            </a>
          </div>
        </div>

        <div className='rounded-lg border border-white/10 bg-white/[0.02] p-6'>
          <p className='font-mono text-sm text-muted-foreground'>
            Send a message
          </p>
          <p className='mt-2 font-mono text-xs leading-6 text-muted-foreground'>
            {'// typically reply within 24 hours'}
          </p>
          <ContactForm className='mt-6' />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className='border-t border-white/10 py-8'>
      <div className='section-shell flex flex-col gap-3 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>
        <a
          href={`mailto:${portfolio.email}`}
          className='transition hover:text-terminal'
        >
          available via email
        </a>
      </div>
    </footer>
  );
}
