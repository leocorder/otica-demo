import React from "react";
import { Eye, Facebook, Instagram, LucideIcon } from "lucide-react";

interface SocialProps {
  name: string;
  Icon: LucideIcon;
  url: string;
}

const socials = (): SocialProps[] => {
  const arr = [];
  console.log(process.env.NEXT_PUBLIC_INSTAGRAM);
  if (process.env.NEXT_PUBLIC_INSTAGRAM) {
    arr.push({
      name: "Instagram",
      Icon: Instagram,
      url: `https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM}`,
    });
  }
  if (process.env.NEXT_PUBLIC_FACEBOOK) {
    arr.push({
      name: "Facebook",
      Icon: Facebook,
      url: `https://www.facebook.com/${process.env.NEXT_PUBLIC_FACEBOOK}`,
    });
  }
  return arr;
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-prisma-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-prisma-yellow rounded-full flex items-center justify-center">
                <Eye className="h-6 w-6 text-prisma-blue-dark" />
              </div>
              <span className="text-2xl font-bold font-serif uppercase">
                {process.env.NEXT_PUBLIC_APP_NAME?.split(" ")[0]}
                <span className="text-prisma-yellow">
                  {process.env.NEXT_PUBLIC_APP_NAME?.split(" ")
                    .slice(-1)
                    .join(" ")}
                </span>
              </span>
            </div>
            <p className="text-white/70 max-w-sm mb-8">
              Referência em saúde visual e estilo. Sua ótica de confiança para
              óculos de grau, solares e lentes de contato.
            </p>
            <div className="flex gap-4">
              {socials().map(({ name, Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-prisma-yellow hover:text-prisma-blue-dark rounded-full flex items-center justify-center transition-all"
                >
                  <span className="sr-only">{name}</span>
                  <Icon className="h-6 w-6" />

                  {/* <div className="w-5 h-5 border-2 border-current rounded-sm"></div> */}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-prisma-yellow">
              Links Rápidos
            </h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="hover:text-white transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-prisma-yellow">
              Nossos Serviços
            </h4>
            <ul className="space-y-4 text-white/70">
              <li>Lentes Progressivas</li>
              <li>Filtro de Luz Azul</li>
              <li>Óculos de Sol com Grau</li>
              <li>Manutenção e Ajustes</li>
              {/* <li>Exame de Refração</li> */}
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>{`© ${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_APP_NAME}. Todos os direitos reservados.`}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div> */}
        <div className="border-t border-white/10 pt-10 text-center text-white/50 text-sm">
          <p>{`© ${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_APP_NAME}. Todos os direitos reservados.`}</p>
        </div>
      </div>
    </footer>
  );
};
