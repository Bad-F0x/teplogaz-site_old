"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import type { TeamMember } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Award } from "lucide-react";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const pages = member.certificatePages ?? [];

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedId(null);
  }, []);

  const openLightbox = useCallback((id: string) => setSelectedId(id), []);
  const closeLightbox = useCallback(() => setSelectedId(null), []);

  const selected = selectedId
    ? (pages.find((p) => p.id === selectedId) ?? null)
    : null;

  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedId) {
          closeLightbox();
        } else {
          closeModal();
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [modalOpen, selectedId, closeLightbox, closeModal]);

  return (
    <>
      <Card key={member.name} size="sm" className="card-hover text-center">
        <div className="flex justify-center pt-6">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image
              src={member.imageSrc}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <CardContent className="space-y-2">
          <h3 className="font-semibold text-foreground">{member.name}</h3>
          <p className="text-sm font-medium text-primary">{member.position}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {member.description}
          </p>
          {pages.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={openModal}
              className="mt-2"
            >
              <Award className="mr-1.5 h-4 w-4" />
              Свидетельства НОК
            </Button>
          )}
        </CardContent>
      </Card>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeModal}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div
            className="relative max-w-2xl w-full bg-background rounded-xl p-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                Свидетельства НОК — {member.name}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Закрыть</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pages.map((page) => (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => openLightbox(page.id)}
                  className="text-left cursor-pointer"
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-64">
                      <Image
                        src={page.imageSrc}
                        alt={`Свидетельство НОК ${member.name}`}
                        fill
                        className="object-contain p-2 select-none pointer-events-none"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>
                  </Card>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-10 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm hover:bg-white transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Закрыть</span>
            </button>

            <div
              className="relative flex items-center justify-center"
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                src={selected.imageSrc}
                alt="Свидетельство НОК"
                width={0}
                height={0}
                sizes="90vw"
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain select-none pointer-events-none"
                priority
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none select-none"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id={`watermark-${selected.id}`}
                    x="0"
                    y="0"
                    width="260"
                    height="260"
                    patternUnits="userSpaceOnUse"
                  >
                    <g
                      transform="rotate(-30 130 130)"
                      fill="white"
                      fontFamily="sans-serif"
                      fontSize="18"
                      fontWeight="bold"
                      textAnchor="middle"
                      opacity="0.15"
                    >
                      <text x="130" y="30">
                        ПК Теплогаз
                      </text>
                      <text x="40" y="140">
                        ПК Теплогаз
                      </text>
                      <text x="220" y="140">
                        ПК Теплогаз
                      </text>
                      <text x="130" y="250">
                        ПК Теплогаз
                      </text>
                    </g>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#watermark-${selected.id})`}
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
