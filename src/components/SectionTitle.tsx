import type { FC } from 'react';

export const SectionTitle: FC<{
  eyebrow?: string;
  title: string;
  className?: string;
}> = ({ eyebrow, title, className = '' }) => (
  <div className={`text-center ${className}`}>
    {eyebrow && (
      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
        {eyebrow}
      </span>
    )}
    <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
      {title.split(' ').map((word, i, arr) =>
        i === arr.length - 1 ? (
          <span key={i} className="gold-text">
            {word}
          </span>
        ) : (
          <span key={i}>{word} </span>
        ),
      )}
    </h2>
    <div className="mx-auto mt-6 flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
    </div>
  </div>
);
