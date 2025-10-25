import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AdvancedParticles from "@/components/AdvancedParticles";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.1);
  const parallaxOffset = useParallax();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-subtle">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20" />

      {/* Animated Particles */}
      <AdvancedParticles
        particleCount={100}
        colors={['rgba(81, 56, 242, 0.8)', 'rgba(60, 54, 217, 0.8)', 'rgba(45, 31, 140, 0.5)']}
        interactive={true}
      />

      {/* Navigation Bar */}
      <nav className="md:sticky top-0 z-50 backdrop-blur-sm bg-transparent border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src="/logo.png" alt="Newaylab Logo" className="h-12 w-auto" />
            <a href="https://chat.whatsapp.com/EOl7E9PNAtoJVdaKl5eLnm" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="group text-sm md:text-base px-4 md:px-8">
                Entrar na Comunidade
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className={`text-center lg:text-left space-y-8 transition-opacity duration-700 ${
              contentVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: contentVisible
                ? `translateY(${Math.max(-30, -parallaxOffset * 0.03)}px)`
                : 'translateY(40px)'
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Conecte-se com Especialistas em{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Automação com IA
              </span>{" "}
              do Brasil
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              A Newaylab é a comunidade onde profissionais e empresários transformam ideias em automações lucrativas usando Inteligência Artificial
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://chat.whatsapp.com/EOl7E9PNAtoJVdaKl5eLnm" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg group h-[54px] px-10">
                  Quero Fazer Parte
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Video */}
          <div
            ref={imageRef}
            className={`relative transition-opacity duration-700 delay-200 ${
              imageVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: imageVisible
                ? `translateY(${Math.max(-40, -parallaxOffset * 0.04)}px)`
                : 'translateY(40px)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30" />
            <div className="relative rounded-2xl shadow-card border border-primary/20 overflow-hidden">
              <video
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full opacity-60"
                style={{ marginTop: '-10%' }}
              />
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Texto sobre o vídeo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 px-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    Entre em nossa comunidade agora e faça parte!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
