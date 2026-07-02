import { company } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { AboutSection } from "@/components/about-section";
import { TeamSection } from "@/components/team-section";
import { ThanksGallery } from "@/components/thanks-gallery";
import { ContactsSection } from "@/components/contacts-section";

export default function HomePage() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 gradient-hero-vibrant pattern-grid opacity-50" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-3 sm:gap-4">
            <Image
              src="/logo.png"
              alt={company.name}
              width={120}
              height={120}
              className="h-auto w-auto max-h-28 sm:max-h-36"
              priority
            />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {company.name}
            </h1>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-medium text-primary sm:text-2xl">
              {company.tagline}
            </p>
            <p className="text-base text-muted-foreground max-w-lg mx-auto sm:text-lg">
              {company.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground animate-pulse flex items-center gap-2">
              Листайте вниз
              <ArrowDown className="h-4 w-4" />
            </span>
          </div>
        </div>
      </section>

      <AboutSection />

      <TeamSection />

      <section id="thanks" className="scroll-mt-14 py-20 sm:py-28">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Благодарности
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Наши заказчики доверяют нам — вот некоторые благодарственные
              письма
            </p>
          </div>
          <ThanksGallery />
        </div>
      </section>

      <ContactsSection />
    </>
  );
}
