import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";

const SocialCards = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Instagram Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-1">
            <div className="bg-background rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Instagram Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold">
                  Siga-nos no Instagram
                </h2>

                {/* Description */}
                <p className="text-base text-muted-foreground">
                  Fique por dentro de todas as novidades, dicas exclusivas e conteúdos sobre automação com IA. Junte-se à nossa comunidade!
                </p>

                {/* Button */}
                <a
                  href="https://www.instagram.com/neway.lab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white px-6 py-6 group"
                  >
                    <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Seguir @neway.lab
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* YouTube Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-red-500 p-1">
            <div className="bg-background rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* YouTube Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center">
                  <Youtube className="w-8 h-8 text-white" />
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold">
                  Inscreva-se no YouTube
                </h2>

                {/* Description */}
                <p className="text-base text-muted-foreground">
                  Acesse tutoriais completos, cases de sucesso e aprenda na prática como criar automações poderosas com Inteligência Artificial!
                </p>

                {/* Button */}
                <a
                  href="https://www.youtube.com/@newaylab0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:opacity-90 text-white px-6 py-6 group"
                  >
                    <Youtube className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Inscrever-se no Canal
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialCards;
