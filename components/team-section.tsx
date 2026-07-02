import { team } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-14 py-20 sm:py-28">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Наша команда
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Опытные специалисты с многолетним стажем в проектировании и
            строительстве газопроводов
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {team.map((member) => (
            <Card
              key={member.name}
              size="sm"
              className="card-hover text-center"
            >
              <div className="flex justify-center pt-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                  {member.initials}
                </div>
              </div>
              <CardContent className="space-y-2">
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary">
                  {member.position}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
