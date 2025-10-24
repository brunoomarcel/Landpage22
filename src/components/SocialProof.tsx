import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Fundador de SaaS",
    result: "Aumentou eficiência em 300%",
    content: "Através da Newaylab, implementei automações que economizam 40 horas por semana no meu negócio. O networking foi fundamental para encontrar as melhores práticas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Marina Silva",
    role: "Freelancer de Automações",
    result: "Faturamento 5x maior",
    content: "Entrei na comunidade sem experiência em IA. Hoje, fecho projetos de R$ 15k+ graças aos cases compartilhados e mentorias dos membros.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Rafael Costa",
    role: "Gestor de Marketing",
    result: "ROI de 450% em campanhas",
    content: "As automações que aprendi na Newaylab transformaram nosso departamento. Reduzimos custos e triplicamos os resultados das campanhas.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Transformando Carreiras e{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Negócios</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos membros alcançaram
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-primary/20 hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary opacity-50" />
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent font-semibold mt-1">{testimonial.result}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
