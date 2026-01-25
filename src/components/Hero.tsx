import React from "react";
import { CircleCheck, MoveRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.avif')`,
          // backgroundImage: `url('https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-prisma-blue/90 to-prisma-blue/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <span className="inline-block bg-prisma-yellow text-prisma-blue-dark px-4 py-1 rounded-full font-bold text-sm mb-6 uppercase tracking-widest animate-bounce">
            Qualidade & Precisão
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Veja o mundo com{" "}
            <span className="text-prisma-yellow underline decoration-prisma-yellow/30">
              mais nitidez.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-lg">
            Combinamos estilo, saúde visual e as melhores tecnologias em lentes
            para criar óculos que são a sua cara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#produtos"
              className="bg-prisma-yellow hover:bg-prisma-yellow-dark text-prisma-blue-dark px-8 py-4 rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2 group"
            >
              Explorar Coleções
              <MoveRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-center transition-all"
            >
              Lentes de Grau
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements for visual interest */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="glass-card p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20">
          <div className="w-12 h-12 bg-prisma-yellow rounded-full flex items-center justify-center">
            <CircleCheck className="h-5 w-5 text-prisma-blue" />
          </div>
          <div>
            <p className="text-prisma-blue-dark font-bold text-sm leading-none">
              Certificado de Garantia
            </p>
            <p className="text-prisma-gray-soft text-xs mt-1">
              Lentes das melhores marcas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
