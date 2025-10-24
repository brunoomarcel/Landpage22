import { Card, CardContent } from "@/components/ui/card";
import { Video, MessageSquare, Trophy, Users2, Bell, FileText } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Calls Semanais com Especialistas",
    description: "Sessões ao vivo com profissionais de destaque no mercado de IA",
  },
  {
    icon: MessageSquare,
    title: "Grupo no Discord Ativo 24/7",
    description: "Comunidade sempre online para tirar dúvidas e trocar experiências",
  },
  {
    icon: Trophy,
    title: "Desafios Práticos de Automação",
    description: "Pratique suas habilidades e ganhe reconhecimento na comunidade",
  },
  {
    icon: Users2,
    title: "Mastermind Entre Membros",
    description: "Sessões exclusivas de brainstorming com outros profissionais",
  },
  {
    icon: Bell,
    title: "Atualizações sobre Novas IAs",
    description: "Seja o primeiro a saber sobre ferramentas e tendências do mercado",
  },
  {
    icon: FileText,
    title: "Templates e Workflows Compartilhados",
    description: "Biblioteca completa de recursos prontos para implementar",
  },
];

const WhatYouFind = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O que você vai{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">encontrar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recursos exclusivos para acelerar sua jornada com automações
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-card group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouFind;
