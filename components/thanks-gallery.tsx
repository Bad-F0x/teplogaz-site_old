"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { gratitudeLetters } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

export function ThanksGallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = selectedId
    ? gratitudeLetters.find((l) => l.id === selectedId)
    : null;

  const open = useCallback((id: string) => setSelectedId(id), []);
  const close = useCallback(() => setSelectedId(null), []);

  useEffect(() => {
    if (!selectedId) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [selectedId, close]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gratitudeLetters.map((letter) => (
          <button
            key={letter.id}
            type="button"
            onClick={() => open(letter.id)}
            className="text-left cursor-pointer"
          >
            <Card className="card-hover overflow-hidden h-full">
              <div className="relative h-56 sm:h-64">
                <Image
                  src={letter.imageSrc}
                  alt={`Благодарственное письмо от ${letter.from}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Card>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={close}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute -top-10 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm hover:bg-white transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Закрыть</span>
            </button>

            <div className="relative w-full max-h-[85vh] aspect-[3/4]">
              <Image
                src={selected.imageSrc}
                alt={`Благодарственное письмо от ${selected.from}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
