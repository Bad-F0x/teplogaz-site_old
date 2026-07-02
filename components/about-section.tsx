import { aboutCompany, directions, partners } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  Shield,
  Handshake,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-14 py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 space-y-16">
        {/* Заголовок */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            О компании
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {aboutCompany.history}
          </p>
        </div>

        {/* Ключевая информация */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card size="sm" className="card-hover">
            <CardContent className="space-y-3 pt-3">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="font-semibold text-foreground">С 2010 года</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Более 15 лет успешной работы в сфере газоснабжения
              </p>
            </CardContent>
          </Card>

          <Card size="sm" className="card-hover">
            <CardContent className="space-y-3 pt-3">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="font-semibold text-foreground">Членство в СРО</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {aboutCompany.sro.name}
                <br />
                ОГРН {aboutCompany.sro.ogrn}
              </p>
            </CardContent>
          </Card>

          <Card size="sm" className="card-hover sm:col-span-2 lg:col-span-1">
            <CardContent className="space-y-3 pt-3">
              <Handshake className="h-6 w-6 text-primary" />
              <h3 className="font-semibold text-foreground">
                Индивидуальный подход
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Работаем под ключ — от консультации до ввода в эксплуатацию
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Подход */}
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {aboutCompany.approach}
          </p>
        </div>

        {/* Направления деятельности */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Направления деятельности
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Полный спектр услуг в сфере газоснабжения — 7 ключевых направлений
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {directions.map((direction) => (
              <Card key={direction.title} size="sm" className="card-hover">
                <CardContent className="space-y-2 pt-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <h4 className="font-medium text-foreground text-sm">
                      {direction.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {direction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Регионы */}
        <div className="space-y-6">
          <div className="flex items-start gap-3 max-w-3xl mx-auto">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <p className="text-muted-foreground leading-relaxed">
              {aboutCompany.regions[0]}
            </p>
          </div>
        </div>

        {/* Партнёры и аттестация */}
        <div className="grid gap-8 sm:grid-cols-2">
          <Card size="sm" className="card-hover">
            <CardContent className="space-y-4 pt-3">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Партнёры</h3>
              </div>
              <ul className="space-y-2">
                {partners.map((partner) => (
                  <li key={partner.name} className="flex items-center gap-2">
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary hover:underline"
                    >
                      {partner.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card size="sm" className="card-hover">
            <CardContent className="space-y-4 pt-3">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Аттестация сотрудников
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {aboutCompany.certification}
              </p>
              <Badge variant="secondary">НОПРИЗ</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
