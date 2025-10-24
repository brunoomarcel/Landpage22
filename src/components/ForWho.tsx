import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Laptop, TrendingUp, Zap, DollarSign } from "lucide-react";

const profiles = [
  {
    icon: Briefcase,
    title: "Empreendedores",
    description: "Quer automatizar processos e escalar seu negócio com IA",
  },
  {
    icon: Laptop,
    title: "Freelancers",
    description: "Busca oferecer serviços de automação e aumentar faturamento",
  },
  {
    icon: TrendingUp,
    title: "Profissionais de Marketing/Vendas",
    description: "Deseja otimizar resultados e economizar tempo com automações",
  },
  {
    icon: Zap,
    title: "Entusiastas de Tecnologia",
    description: "Quer estar à frente das tendências em Inteligência Artificial",
  },
  {
    icon: DollarSign,
    title: "Quem Busca Renda Extra",
    description: "Deseja criar uma fonte de renda oferecendo automações",
  },
];

const ForWho = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A Newaylab é{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">perfeita</span>{" "}
            para você que:
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <Card 
              key={index}
              className="bg-card border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-secondary mx-auto flex items-center justify-center">
                  <profile.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">{profile.title}</h3>
                <p className="text-sm text-muted-foreground">{profile.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
