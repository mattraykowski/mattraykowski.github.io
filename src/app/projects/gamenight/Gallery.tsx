'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowRight')
        setSelected((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === 'ArrowLeft')
        setSelected((i) =>
          i === null ? null : (i - 1 + items.length) % items.length,
        );
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, items.length]);

  useEffect(() => {
    if (selected === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selected]);

  const active = selected === null ? null : items[selected];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item, idx) => (
          <figure key={item.src}>
            <button
              type="button"
              onClick={() => setSelected(idx)}
              className="block w-full cursor-zoom-in overflow-hidden rounded border border-border transition-opacity hover:opacity-90"
              aria-label={`Open ${item.alt} in larger view`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto w-full"
              />
            </button>
            <figcaption className="mt-2 font-mono text-xs text-text-muted">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelected(null);
            }}
            aria-label="Close"
            className="absolute right-4 top-4 rounded border border-border bg-black/40 px-3 py-1 font-mono text-sm text-text-muted hover:text-text"
          >
            ESC
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-6xl flex-col items-center"
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="max-h-[85vh] w-auto rounded border border-border"
            />
            <figcaption className="mt-3 font-mono text-xs text-text-muted">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
