import React from "react";
import { FileText, Settings2, ThumbsUp } from "lucide-react";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-prisma-yellow-light hover:shadow-xl transition-all duration-300 group">
    <div className="w-16 h-16 bg-prisma-yellow-light rounded-xl flex items-center justify-center text-prisma-blue-dark mb-6 group-hover:bg-prisma-yellow transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-prisma-blue mb-4">{title}</h3>
    <p className="text-prisma-gray-soft leading-relaxed">{description}</p>
  </div>
);

export const Services: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-prisma-yellow font-bold uppercase tracking-widest text-sm mb-4">
            O que fazemos
          </h2>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-prisma-blue mb-6">
            Expertise em Cuidados Visuais
          </h2>
          <p className="text-prisma-gray-soft text-lg">
            Na {process.env.NEXT_PUBLIC_APP_NAME}, transformamos sua receita
            médica em uma solução visual perfeita, unindo tecnologia de ponta
            com um design que reflete sua personalidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceItem
            icon={<FileText className="h-7 w-7" />}
            title="Receitas Médicas"
            description="Leitura técnica precisa da sua prescrição oftalmológica para garantir que suas lentes tenham exatamente o que você precisa."
          />
          <ServiceItem
            icon={<Settings2 className="h-7 w-7" />}
            title="Customização Total"
            description="Escolha entre diversos tipos de tratamentos: antirreflexo, filtro azul, fotocromáticas (transition) e espelhadas."
          />
          <ServiceItem
            icon={<ThumbsUp className="h-7 w-7" />}
            title="Ajuste Personalizado"
            description="Ajustamos sua armação anatomicamente para o máximo conforto, garantindo que o centro óptico esteja alinhado com seu olhar."
          />
        </div>
      </div>
    </div>
  );
};
