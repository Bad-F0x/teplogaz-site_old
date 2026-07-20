import { team } from "@/lib/data";
import { TeamMemberCard } from "@/components/team-member-card";

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
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
