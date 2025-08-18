"use client";
import { useState } from "react";
export default function Lightbox({ images }: { images: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  if (!images?.length) return null;
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((src, i) => (
          <button key={i} onClick={() => setOpen(i)} className="relative h-56 w-full overflow-hidden rounded-xl border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Gallery ${i+1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 grid place-items-center p-4" onClick={() => setOpen(null)}>
          <img src={images[open]} alt={`Full ${open+1}`} className="max-h-[90vh] max-w-[92vw] rounded-xl" />
        </div>
      )}
    </>
  );
}