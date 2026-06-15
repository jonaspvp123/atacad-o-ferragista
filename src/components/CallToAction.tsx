import { MessageCircle } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-[#e46119] rounded-3xl p-10 md:p-14 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Não perca tempo rodando a cidade!
          </h2>
          <p className="text-orange-50 text-lg md:text-xl mb-8 font-medium">
            Temos tudo o que você precisa em hidráulica e ferragens agora mesmo.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#e46119] font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 mx-auto transition-colors text-lg w-full sm:w-auto shadow-md">
            <MessageCircle className="w-6 h-6 text-green-500" />
            FALAR COM UM VENDEDOR ESPECIALISTA
          </button>
          <p className="text-orange-100 text-sm mt-4 tracking-wide font-medium">
            Resposta imediata dentro do horário comercial
          </p>
        </div>
      </div>
    </section>
  );
}
