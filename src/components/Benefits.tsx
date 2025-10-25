import { Rocket, Video, Users, Puzzle, GraduationCap, FileText, Radio, Sparkles, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Acesso a workflows gratuitos",
    description: "Workflows prontos para você implementar e automatizar seus processos",
  },
  {
    icon: Video,
    emoji: "🎥",
    title: "Atualizações sobre novos vídeos e tutoriais",
    description: "Seja notificado sobre todo conteúdo novo publicado",
  },
  {
    icon: Users,
    emoji: "🤝",
    title: "Networking com especialistas",
    description: "Conecte-se com profissionais que dominam automações",
  },
  {
    icon: Puzzle,
    emoji: "🧩",
    title: "Templates prontos para usar",
    description: "Copie e cole templates validados e testados",
  },
  {
    icon: GraduationCap,
    emoji: "🧠",
    title: "Tutoriais passo a passo",
    description: "Aprenda n8n, Make e Zapier do zero ao avançado",
  },
  {
    icon: FileText,
    emoji: "💼",
    title: "Estudos de caso reais",
    description: "Veja automações aplicadas em negócios reais",
  },
  {
    icon: Radio,
    emoji: "🔴",
    title: "Lives e encontros mensais",
    description: "Participe de eventos ao vivo com convidados especiais",
  },
  {
    icon: Sparkles,
    emoji: "🪄",
    title: "Mini-cursos exclusivos",
    description: "Conteúdos aprofundados sobre IA, APIs e produtividade",
  },
  {
    icon: Gift,
    emoji: "🎁",
    title: "Acesso antecipado",
    description: "Seja o primeiro a ter acesso aos novos conteúdos",
  },
];

const Benefits = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(benefits.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const parallaxOffset = useParallax();

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-opacity duration-700 ${
            titleVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: titleVisible
              ? `translateY(${Math.max(-30, -parallaxOffset * 0.02)}px)`
              : 'translateY(40px)'
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por que fazer parte da{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Newaylab?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefícios exclusivos para quem quer dominar automações com IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-card border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-card group ${
                visibleCards[index]
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transitionDelay: visibleCards[index] ? `${index * 80}ms` : '0ms',
                transform: visibleCards[index]
                  ? `translateY(${Math.max(-30, -parallaxOffset * 0.03)}px)`
                  : 'translateY(40px)'
              }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{benefit.emoji}</span>
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
