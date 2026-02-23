import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Eye, Menu } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#servicos" },
    { name: "Produtos", href: "#produtos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-prisma-blue py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-prisma-yellow rounded-full flex items-center justify-center">
            <Eye className="h-6 w-6 text-prisma-blue-dark" />
          </div>
          <Link
            href="/"
            className={`text-2xl font-bold font-serif uppercase ${isScrolled || !isScrolled ? "text-white" : "text-prisma-blue"}`}
          >
            {process.env.NEXT_PUBLIC_APP_NAME?.split(" ")[0]}
            <span className="text-prisma-yellow">
              {process.env.NEXT_PUBLIC_APP_NAME?.split(" ").slice(-1).join(" ")}
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-prisma-yellow transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-prisma-yellow hover:bg-prisma-yellow-dark text-prisma-blue-dark font-bold px-5 py-2 rounded-full transition-all transform hover:scale-105"
          >
            Falar Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-prisma-blue-dark absolute top-full left-0 right-0 py-6 border-t border-prisma-blue shadow-2xl animate-fade-in-down">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-prisma-yellow text-prisma-blue-dark font-bold px-8 py-3 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
