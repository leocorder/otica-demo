import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const googleImages = [
  "https://www.google.com/maps/embed?pb=!4v1769376603172!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFBzXzMzZUE.!2m2!1d-22.72612933627737!2d-47.64738873319556!3f340!4f0!5f0.7820865974627469",
  "https://www.google.com/maps/embed?pb=!4v1769376644410!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0NucS1XT1E.!2m2!1d-22.72583387311252!2d-47.64694598533728!3f320!4f10!5f0.7820865974627469",
  "https://www.google.com/maps/embed?pb=!4v1769376680593!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFBzNTNLRFE.!2m2!1d-22.72612933627737!2d-47.64738873319556!3f333.53300429275333!4f-3.892710036534851!5f0.7820865974627469",
  "https://www.google.com/maps/embed?pb=!4v1769376741766!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFBzOTMwMFFF!2m2!1d-22.72612933627737!2d-47.64738873319556!3f200.48171512008153!4f-20.55122863182612!5f0.7820865974627469",
];

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
                  "Desde 1982 no mercado",
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

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {googleImages.map((src, i) => (
            <div
              key={i}
              className="h-96 rounded-3xl overflow-hidden bg-white/10 shadow-xl border-2 border-white"
            >
              <iframe
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
