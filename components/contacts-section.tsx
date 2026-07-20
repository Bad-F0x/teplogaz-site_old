"use client";

import { company } from "@/lib/data";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const mapBbox = `${company.mapCoords.lng - 0.005},${company.mapCoords.lat - 0.005},${company.mapCoords.lng + 0.005},${company.mapCoords.lat + 0.005}`;
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&layer=mapnik&marker=${company.mapCoords.lat},${company.mapCoords.lng}`;

export function ContactsSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formatName = (value: string) =>
    value
      .split(/\s+/)
      .map((word) =>
        word.length > 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word
      )
      .join(" ");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(formatName(e.target.value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, "");
    setPhone("+7" + digits.replace(/^7?/, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Укажите имя");
      return;
    }
    if (!phone.trim() || phone === "+7") {
      toast.error("Укажите телефон");
      return;
    }
    if (!comment.trim()) {
      toast.error("Напишите комментарий");
      return;
    }

    setIsLoading(true);
    const id = toast.loading("Отправляем...");

    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          comment: comment.trim() || undefined,
        }),
      });

      if (!res.ok) {
        throw new Error("Ошибка при отправке");
      }

      toast.success("Спасибо! Ваша заявка принята", { id });
      setName("");
      setPhone("");
      setComment("");
    } catch {
      toast.error("Ошибка при отправке", { id });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacts" className="scroll-mt-14 py-20 sm:py-28">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Контакты
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Адрес</p>
                  <p className="text-muted-foreground">{company.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Телефон</p>
                  <a
                    href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href={`https://mail.yandex.ru/compose?to=${company.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Обратная связь</h3>
            <p className="text-sm text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Имя <span className="text-destructive">*</span>
                </label>
                <Input
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Ваше имя"
                  disabled={isLoading}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Телефон <span className="text-destructive">*</span>
                </label>
                <Input
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (XXX) XXX-XX-XX"
                  disabled={isLoading}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Комментарий <span className="text-destructive">*</span>
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Опишите ваш вопрос или пожелание"
                  disabled={isLoading}
                  required
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="h-11 px-6 w-full sm:w-auto"
              >
                <Send className="h-4 w-4 mr-2" />
                {isLoading ? "Отправка..." : "Отправить"}
              </Button>
            </form>
          </div>
        </div>

        <div className="w-full rounded-xl overflow-hidden ring-1 ring-foreground/10">
          <iframe
            src={mapSrc}
            width="100%"
            height="360"
            className="w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта — ООО ПК Теплогаз"
          />
        </div>
      </div>
    </section>
  );
}
