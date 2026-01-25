import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export const About: React.FC = () => {
  return (
    <div className="py-24 bg-prisma-blue-dark text-white overflow-hidden relative">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-prisma-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-prisma-blue/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-prisma-yellow font-bold uppercase tracking-widest text-sm mb-4">
              Sobre Nós
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Excelência no seu olhar é a nossa missão.
            </h2>

            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                Fundada com o propósito de humanizar o atendimento óptico, a{" "}
                <span className="text-white font-bold">Ótica Prisma</span> se
                tornou referência em inovação e precisão. Não vendemos apenas
                armações; entregamos qualidade de vida.
              </p>
              <p>
                Contamos com um laboratório de montagem próprio, o que nos
                permite entregar seus óculos com rapidez sem abrir mão do rigor
                técnico que sua saúde visual exige.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Mais de 15 anos de mercado",
                  "Equipe de optometristas altamente qualificados",
                  "Curadoria exclusiva de marcas nacionais e importadas",
                  "Garantia de adaptação para todas as lentes",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-prisma-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-prisma-blue-dark" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-8 border-prisma-blue shadow-2xl">
              <Image
                src="/images/about.webp"
                // src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop"
                alt="Equipe Ótica Prisma"
                className="w-full h-full object-cover"
                fill={true}
              />
            </div>
            {/* Stats */}
            <div className="absolute -bottom-10 -left-10 bg-prisma-yellow p-8 rounded-2xl shadow-xl text-prisma-blue-dark">
              <p className="text-4xl font-bold font-serif">10k+</p>
              <p className="font-medium">Clientes Felizes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
