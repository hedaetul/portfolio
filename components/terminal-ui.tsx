import Link from 'next/link';

import { cn } from '@/lib/utils';

type PageBreadcrumbProps = {
  segments: string[];
  className?: string;
};

export function PageBreadcrumb({ segments, className }: PageBreadcrumbProps) {
  return (
    <p className={cn('font-mono text-sm text-muted-foreground', className)}>
      <span className='text-terminal'>~</span>
      {segments.map((segment) => (
        <span key={segment}>
          {' '}
          / <span className='text-foreground'>{segment}</span>
        </span>
      ))}
    </p>
  );
}

type CommandHeadingProps = {
  command: string;
  className?: string;
};

export function CommandHeading({ command, className }: CommandHeadingProps) {
  return (
    <h1
      className={cn(
        'font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-5xl',
        className,
      )}
    >
      <span className='text-muted-foreground'>$ </span>
      {command}
    </h1>
  );
}

type InfoRow = {
  label: string;
  value: string;
  comment?: string;
  status?: boolean;
};

export function InfoTable({ rows }: { rows: InfoRow[] }) {
  return (
    <div className='mt-10 border-t border-white/10'>
      {rows.map((row) => (
        <div
          key={row.label}
          className='grid gap-2 border-b border-white/10 py-4 font-mono text-sm sm:grid-cols-[140px_1fr]'
        >
          <div className='flex items-start gap-2 text-muted-foreground'>
            <span className='text-terminal'>-&gt;</span>
            <span>{row.label}</span>
          </div>
          <div className='text-foreground sm:pl-2'>
            {row.status ? (
              <span className='inline-flex items-center gap-2'>
                <span className='size-2 rounded-full bg-terminal' />
                {row.value}
              </span>
            ) : (
              <>
                {row.value}
                {/* {row.comment ? <span className="text-muted-foreground"> //{row.comment}</span> : null} */}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TerminalPageShell({
  breadcrumb,
  command,
  children,
  aside,
}: {
  breadcrumb: string[];
  command: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className='relative scroll-mt-24 pt-28 sm:pt-32'>
      <div className='dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]' />
      <div className='section-shell relative pb-20'>
        <PageBreadcrumb segments={breadcrumb} />
        <div className='mt-8 grid gap-12 lg:grid-cols-[1.05fr_.85fr] lg:items-start'>
          <div>
            <CommandHeading command={command} />
            {children}
          </div>
          {aside ? <div className='lg:sticky lg:top-24'>{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function TerminalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'font-mono text-sm text-terminal transition hover:text-terminal/80',
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function CommandOutput({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mt-6 rounded-lg border border-white/10 bg-black/20 p-4 font-mono text-sm leading-7 text-muted-foreground',
        className,
      )}
    >
      {children}
    </div>
  );
}
