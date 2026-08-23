import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { BridgeProvider } from "@/components/bridge-provider";
import { YandexMetrica } from "@/components/yandex-metrica";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/data";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const seoTitle =
  "Проектная контора «ТЕПЛОГАЗ» — газификация Омск | Проектирование газопроводов";
const seoDescription =
  "Полный комплекс по газификации объектов в Омске и Омской области: проектирование газопроводов, получение техусловий, строительно-монтажные работы и ввод в эксплуатацию под ключ. ООО Проектная контора «ТЕПЛОГАЗ».";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "газификация Омск",
    "проектирование газопроводов Омск",
    "газоснабжение Омская область",
    "проектная контора ТЕПЛОГАЗ",
    "проектирование газоснабжения",
    "строительство газопроводов Омск",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    yandex: "1e0cff075f7d5310",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: company.name,
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: company.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: seoTitle,
    description: seoDescription,
    images: ["/logo.png"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Проектная контора «ТЕПЛОГАЗ»",
  alternateName: company.shortName,
  legalName: company.name,
  description: company.description,
  telephone: "+7 913 600 00 21",
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Малиновского, д. 19, пом. 5-П",
    addressLocality: "Омск",
    addressRegion: "Омская область",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.mapCoords.lat,
    longitude: company.mapCoords.lng,
  },
  areaServed: "Омск и Омская область",
  founder: {
    "@type": "Person",
    name: company.director,
  },
  vatID: `RU${company.inn}`,
  identifier: company.inn,
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "ОГРН",
      value: "1145543009314",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("font-sans scroll-smooth", geist.variable)}>
      <body className="antialiased min-h-screen bg-background flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <BridgeProvider />
        <YandexMetrica />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
