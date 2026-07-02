"use client";

import { company } from "@/lib/data";
import { Phone, Mail, MapPin, MapIcon, Building2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const mapBbox = `${company.mapCoords.lng - 0.005},${company.mapCoords.lat - 0.005},${company.mapCoords.lng + 0.005},${company.mapCoords.lat + 0.005}`;
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&layer=mapnik&marker=${company.mapCoords.lat},${company.mapCoords.lng}`;

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8 space-y-4">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="space-y-2">
            <p className="font-semibold text-sm">{company.shortName}</p>
            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="size-3.5" />
                {company.phone}
              </a>
              <a
                href={`https://mail.yandex.ru/compose?to=${company.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="size-3.5" />
                {company.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-3.5" />
                {company.address}
              </span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <MapIcon className="size-4" />
              Карта
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogTitle className="sr-only">
                Карта — {company.shortName}
              </DialogTitle>
              <div className="w-full rounded-lg overflow-hidden ring-1 ring-foreground/10">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="400"
                  className="w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта — ООО ПК Теплогаз"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="size-4 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Реквизиты
            </span>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-1.5 text-xs text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
            <span>ИНН {company.inn}</span>
            <span>КПП {company.kpp}</span>
            <span>БИК {company.bik}</span>
            <span className="sm:col-span-2 lg:col-span-1">
              р/с {company.currentAccount}
            </span>
            <span className="sm:col-span-2 lg:col-span-1">
              к/с {company.correspondentAccount}
            </span>
            <span className="sm:col-span-2 lg:col-span-1">{company.bank}</span>
            <span className="sm:col-span-2 lg:col-span-3">
              Юридический адрес: {company.legalAddress}
            </span>
            <span className="sm:col-span-2 lg:col-span-3">
              Директор: {company.director}
            </span>
          </div>
        </div>

        <div className="border-t pt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {company.name}
        </div>
      </div>
    </footer>
  );
}
