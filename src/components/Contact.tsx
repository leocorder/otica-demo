import React, { useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";

const whatsAppLink = (
  number: number,
  message: string | undefined = undefined,
) =>
  `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const Contact: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-prisma-yellow font-bold uppercase tracking-widest text-sm mb-4">
              Fale com a Prisma
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-prisma-blue mb-8">
              Faça-nos uma visita ou solicite seu orçamento via WhatsApp
            </h2>

            <p className="text-prisma-gray-soft mb-12 text-lg">
              Tem uma receita em mãos? Envie-nos uma foto ou venha tomar um café
              conosco. Nossa equipe está pronta para te ajudar a escolher a
              melhor opção.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-prisma-off-white rounded-full flex items-center justify-center text-prisma-blue border border-prisma-blue/10">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-prisma-blue text-xl mb-1">
                    Localização
                  </h4>
                  <p className="text-prisma-gray-soft">
                    Rua Moraes Barros, 956
                    <br />
                    Centro, Piracicaba - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-prisma-off-white rounded-full flex items-center justify-center text-prisma-blue border border-prisma-blue/10">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-prisma-blue text-xl mb-1">
                    Telefone / WhatsApp
                  </h4>
                  <p className="text-prisma-gray-soft">
                    <a href="tel:+551934223591">(19) 3422-3591</a>
                    <br />
                    <a href={whatsAppLink(5519991135041)}>(19) 99113-5041</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-prisma-off-white rounded-full flex items-center justify-center text-prisma-blue border border-prisma-blue/10">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-prisma-blue text-xl mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-prisma-gray-soft">
                    Segunda a Sexta: 09h às 18h
                    <br />
                    Sábados: 09h às 14h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-prisma-off-white p-10 rounded-3xl shadow-sm border border-prisma-yellow-light">
            <h3 className="text-2xl font-bold text-prisma-blue mb-6">
              Mande uma mensagem
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-prisma-gray mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-prisma-yellow focus:outline-none"
                    placeholder="Ex: João Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-prisma-gray mb-1">
                    Celular/WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-prisma-yellow focus:outline-none"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-prisma-gray mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-prisma-yellow focus:outline-none"
                  placeholder="joao@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-prisma-gray mb-1">
                  Mensagem ou dúvida
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-prisma-yellow focus:outline-none"
                  placeholder="Conte-nos o que você precisa..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-prisma-blue hover:bg-prisma-blue-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-prisma-blue/30"
              >
                Enviar Mensagem
              </button>
            </form>
          </div> */}
          <div className="flex flex-col gap-6 bg-prisma-off-white p-10 rounded-3xl shadow-sm border border-prisma-yellow-light">
            <h3 className="text-2xl font-bold text-prisma-blue">
              Mande uma mensagem
            </h3>
            <textarea
              rows={4}
              className="flex-1 px-4 py-3 max-h-[250px] rounded-xl border border-gray-200 focus:ring-2 focus:ring-prisma-yellow focus:outline-none"
              placeholder="Conte-nos o que você precisa..."
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
            <button
              type="button"
              className="bg-prisma-blue hover:bg-prisma-blue-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-prisma-blue/30 cursor-pointer"
              onClick={() => {
                window.open(
                  whatsAppLink(5519991135041, message || undefined),
                  "_blank",
                );
                // setMessage("");
              }}
            >
              Enviar Mensagem
            </button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-96 rounded-3xl overflow-hidden bg-gray-200 shadow-inner flex items-center justify-center border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.057153205761!2d-47.652255913110025!3d-22.726116978264713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1561bfb5bc09a2f%3A0x11c48fada48cba3b!2s%C3%93tica%20Prisma!5e0!3m2!1sen!2sbr!4v1769360738874!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* WhatsApp Button */}
        {/* <div className="fixed bottom-0 right-0 m-8 z-99">
          <a
            href={whatsAppLink(5519991135041)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 p-3 md:w-16 md:h-16 md:p-4  bg-[#25D366] text-white rounded-full shadow-lg transition-transform hover:scale-110"
          >
            <Image
              src="/images/whatsapp.svg"
              alt="WhatsApp"
              width="24"
              height="24"
              className="w-full"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};
