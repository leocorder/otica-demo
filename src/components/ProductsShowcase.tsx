import React, { useState } from "react";
import Image from "next/image";

const categories = ["Todos", "Grau", "Sol", "Infantil", "Acessórios"];

const products = [
  {
    id: 1,
    name: "Vintage Gold",
    description: "Estilo vintage para quem não abre mão da personalidade.",
    categories: ["Sol"],
    price: "A partir de R$ 299",
    img: "/images/products/vintage-gold.avif",
    // img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Aviator Classic",
    description: "Um ícone atemporal com proteção UV400 completa.",
    categories: ["Sol"],
    price: "A partir de R$ 450",
    img: "/images/products/aviator-classic.avif",
    // img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Minimalist Black",
    description: "Design moderno com foco em durabilidade e precisão.",
    categories: ["Sol", "Grau"],
    price: "A partir de R$ 320",
    img: "/images/products/minimalist-black.avif",
    // img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Sport Blue",
    description:
      "Visual contemporâneo, se destaca pelo conforto e pela estética equilibrada, perfeito para quem valoriza detalhes.",
    categories: ["Sol", "Grau"],
    price: "A partir de R$ 580",
    img: "/images/products/sport-blue.avif",
    // img: "https://images.unsplash.com/photo-1591076482161-421a3aaee5f4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Titanium Flex",
    description: "Armação em titânio ultra leve para conforto o dia todo.",
    categories: ["Grau"],
    price: "A partir de R$ 420",
    img: "/images/products/titanium-flex.avif",
    // img: "https://images.unsplash.com/photo-1509100104064-d1e99435143e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Cat Eye Rosa",
    description:
      "Versáteis com linhas bem definidas, pensado para oferecer praticidade e um toque de sofisticação ao visual.",
    categories: ["Sol"],
    price: "A partir de R$ 380",
    img: "/images/products/cat-eye-rosa.avif",
    // img: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1000&auto=format&fit=crop",
  },
];

interface BrandProps {
  src: string;
  alt: string;
}

const brands: BrandProps[] = [
  // { src: "/images/brands/armani.png", alt: "Giorgio Armani" },
  { src: "/images/brands/carmim.png", alt: "Carmim" },
  // { src: "/images/brands/chanel.svg", alt: "Chanel" },
  { src: "/images/brands/chilli-beans.png", alt: "Chilli Beans" },
  { src: "/images/brands/colcci.svg", alt: "Colcci" },
  { src: "/images/brands/crizal.png", alt: "Crizal" },
  // { src: "/images/brands/gucci.svg", alt: "Gucci" },
  { src: "/images/brands/hoya.svg", alt: "Hoya" },
  // { src: "/images/brands/michael-kors.png", alt: "Michael Kors" },
  { src: "/images/brands/oakley.png", alt: "Oakley" },
  // { src: "/images/brands/prada.png", alt: "Prada" },
  { src: "/images/brands/ray-ban.png", alt: "Ray-Ban" },
  // { src: "/images/brands/tom-ford.svg", alt: "Tom Ford" },
  { src: "/images/brands/varilux.png", alt: "Varilux" },
].sort((a, b) => {
  if (a.alt < b.alt) return -1;
  return 1;
});

export const ProductsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Todos");

  const filteredProducts =
    activeTab === "Todos"
      ? products
      : products.filter((p) => p.categories.includes(activeTab));

  return (
    <div className="py-24 bg-prisma-off-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-md:w-full max-md:text-center max-w-2xl">
            <h2 className="text-prisma-yellow font-bold uppercase tracking-widest text-sm mb-4">
              Nossa Vitrine
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-prisma-blue">
              Coleções Exclusivas
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-end max-md:w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === cat
                    ? "bg-prisma-blue text-white shadow-md"
                    : "bg-white text-prisma-blue hover:bg-prisma-yellow-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={1500}
                  height={1500}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex flex-row gap-4">
                  {product.categories.map((category) => (
                    <div
                      key={category}
                      className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-prisma-blue"
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-prisma-blue mb-2 group-hover:text-prisma-yellow transition-colors">
                  {product.name}
                </h3>
                <p className="text-prisma-gray-soft">{product.description}</p>
                {/* <p className="text-prisma-gray-soft mb-6">{product.price}</p> */}
                {/* <button className="w-full border-2 border-prisma-blue text-prisma-blue font-bold py-3 rounded-xl hover:bg-prisma-blue hover:text-white transition-all">
                  Ver Detalhes
                </button> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-prisma-gray-soft mb-8">
            Trabalhamos com as melhores marcas nacionais e internacionais.
          </p>
          {/* add "hover:grayscale-0" to show logo colors on hover */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-30 grayscale transition-all duration-500">
            {brands.map((brand) => (
              <div
                key={brand.alt}
                className="flex items-center w-25 aspect-square"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
