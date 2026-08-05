import { ExternalLink, FileDown } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { CommandHeading, PageBreadcrumb } from '@/components/terminal-ui';
import { portfolio } from '@/lib/portfolio';

export const metadata: Metadata = {
  title: 'Resume',
  description: `View and download ${portfolio.name}'s resume.`,
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  return (
    <main>
      <section className='relative scroll-mt-24 pt-28 sm:pt-32'>
        <div className='dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]' />

        <div className='section-shell relative pb-20'>
          <PageBreadcrumb segments={['resume']} />
          <CommandHeading command='cat resume.pdf' className='mt-8' />

          <p className='mt-4 max-w-2xl font-mono text-sm leading-7 text-muted-foreground'>
            {'// view online below, or download a copy for offline reading'}
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <Link
              href={portfolio.resume.path}
              download={portfolio.resume.downloadName}
              className='inline-flex items-center gap-2 rounded-md bg-terminal px-4 py-2.5 font-mono text-sm font-medium text-black transition hover:bg-terminal/90'
            >
              <FileDown className='size-4' />
              download pdf
            </Link>
            <a
              href={portfolio.resume.path}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 font-mono text-sm text-foreground transition hover:border-terminal/40 hover:text-terminal'
            >
              <ExternalLink className='size-4' />
              open in new tab
            </a>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 font-mono text-sm text-foreground transition hover:border-terminal/40 hover:text-terminal'
            >
              → get in touch
            </Link>
          </div>

          <div className='terminal-window mt-8 overflow-hidden'>
            <div className='flex items-center justify-between border-b border-white/10 px-4 py-3'>
              <p className='font-mono text-sm text-foreground'>
                ~/documents/{portfolio.resume.downloadName}
              </p>
              <p className='font-mono text-xs text-terminal'>preview</p>
            </div>
            <div className='h-[min(80vh,900px)] bg-black/30'>
              <iframe
                src={portfolio.resume.path}
                title={`${portfolio.name} resume`}
                className='h-full w-full border-0'
              />
            </div>
          </div>

          <p className='mt-4 font-mono text-xs text-muted-foreground'>
            {
              '// if the preview does not load in your browser, use download or open in new tab'
            }
          </p>
        </div>
      </section>
    </main>
  );
}
