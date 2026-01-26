import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Check } from "lucide-react";

const images = [
  {
    src: "/images/about-1.jpg",
    alt: "Fechada",
    is360: false,
  },
  {
    src: "/images/about-2.jpg",
    alt: "Interior",
    is360: false,
  },
  {
    src: "/images/about-3.jpg",
    alt: "Vitrine",
    is360: false,
  },
  {
    src: "https://www.google.com/maps/embed?pb=!4v1769376603172!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFBzXzMzZUE.!2m2!1d-22.72612933627737!2d-47.64738873319556!3f340!4f0!5f0.7820865974627469",
    alt: "Fechada 360º",
    is360: true,
    thumb: "/images/about-360-1.jpg",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!4v1769441251088!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFBzNzJrNFFF!2m2!1d-22.72612933627737!2d-47.64738873319556!3f85.47855929814051!4f-12.16618882715808!5f0.7820865974627469",
    // src: "https://www.google.com/maps/embed?pb=!4v1769376644410!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0NucS1XT1E.!2m2!1d-22.72583387311252!2d-47.64694598533728!3f320!4f10!5f0.7820865974627469",
    alt: "Interior 360º",
    is360: true,
    thumb: "/images/about-360-2.jpg",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!4v1769376741766!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFBzOTMwMFFF!2m2!1d-22.72612933627737!2d-47.64738873319556!3f200.48171512008153!4f-20.55122863182612!5f0.7820865974627469",
    alt: "Laboratório 360º",
    is360: true,
    thumb: "/images/about-360-3.jpg",
  },
];

export const About: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      // Create an IntersectionObserver to observe the ref's visibility
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5, // Triggers callback when 50% of the element is visible
        },
      );

      // Start observing the element
      observer.observe(imageRef.current);

      // Cleanup the observer when the component unmounts or ref changes
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="py-24 bg-prisma-blue-dark text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-3 lg:order-1">
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
                    <div className="w-6 h-6 bg-prisma-yellow rounded-full flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-prisma-blue-dark" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div
              ref={imageRef}
              className="relative aspect-square rounded-3xl overflow-hidden border-8 border-prisma-blue shadow-2xl"
            >
              {images.map(({ src, alt, is360 }, i) => {
                if (!is360) {
                  return (
                    <Image
                      key={alt}
                      src={src}
                      alt={alt}
                      width={1500}
                      height={1500}
                      className={clsx(
                        "absolute w-full h-full object-cover opacity-0 transition-opacity duration-500",
                        selected == i && "opacity-100 z-10",
                      )}
                    />
                  );
                }

                return (
                  <div
                    key={alt}
                    className={clsx(
                      "absolute w-full h-full object-cover opacity-0 transition-opacity duration-500",
                      selected == i && "opacity-100 z-10",
                    )}
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
                );
              })}
            </div>
            {/* Stats */}
            <div className="absolute -bottom-10 -left-10 bg-prisma-yellow p-8 rounded-2xl shadow-xl text-prisma-blue-dark z-20">
              <p className="text-4xl font-bold font-serif">10k+</p>
              <p className="font-medium">Clientes Felizes</p>
            </div>
          </div>

          {images.length ? (
            <div className="order-2 lg:order-3 lg:col-span-2 xl:mt-8 max-lg:h-30 grid gap-8 md:gap-12 grid-flow-col auto-cols-max overflow-x-auto lg:grid-flow-row lg:grid-cols-6 lg:overflow-visible ">
              {images.map(({ src, alt, is360, thumb }, i) => {
                return (
                  <div
                    key={alt}
                    className={clsx(
                      "relative h-full aspect-square rounded-3xl overflow-hidden border-2 border-white/0 lg:shadow-2xl cursor-pointer",
                      selected === i && "border-white/100",
                    )}
                  >
                    <Image
                      src={thumb || src}
                      alt={alt}
                      width={400}
                      height={400}
                      className={clsx(
                        "w-full h-full object-cover hover:scale-110 transition-transform duration-400",
                        selected === i && "scale-110",
                      )}
                      onClick={() => {
                        if (!isVisible && imageRef.current) {
                          document
                            .getElementById("sobre")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                        setSelected(i);
                      }}
                    />
                    {is360 ? (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded-full text-[10px] font-bold text-prisma-blue">
                        360º
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
