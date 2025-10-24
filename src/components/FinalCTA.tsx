import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import AdvancedParticles from "@/components/AdvancedParticles";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const FinalCTA = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const parallaxOffset = useParallax();

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-subtle">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20" />

      {/* Animated Particles */}
      <AdvancedParticles
        particleCount={100}
        colors={['rgba(81, 56, 242, 0.8)', 'rgba(60, 54, 217, 0.8)', 'rgba(45, 31, 140, 0.5)']}
        interactive={true}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={contentRef}
          className={`max-w-4xl mx-auto text-center space-y-8 transition-opacity duration-700 ${
            contentVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: contentVisible
              ? `translateY(${Math.max(-50, -parallaxOffset * 0.05)}px)`
              : 'translateY(40px)'
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Pronto para fazer parte da{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              revolução das automações com IA?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já estão transformando ideias em resultados reais usando IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="text-lg group">
              Entrar na Comunidade Newaylab
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-semibold text-accent">Vagas limitadas</span>
            <span>para manter a qualidade da comunidade</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
