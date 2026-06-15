import { Star } from 'lucide-react';

export default function Testimonials() {
  const stars = Array(5).fill(null);
  return (
    <section className="bg-blue-900 py-20 px-6 text-white text-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-12 uppercase tracking-wide">Quem compra, confia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-800 p-8 rounded-xl text-left shadow-xl border border-blue-700/50">
            <div className="flex gap-1 mb-4 text-orange-400">
              {stars.map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-lg italic text-blue-100 mb-6 font-medium leading-relaxed">
              "Sempre encontro as conexões que preciso aqui. O preço é disparado o melhor de Goiânia e o atendimento via zap facilita demais meu dia."
            </p>
            <div className="mt-auto">
              <p className="font-bold text-orange-400">Ricardo Silva</p>
              <p className="text-sm text-blue-300">Encanador Autônomo</p>
            </div>
          </div>
          
          <div className="bg-blue-800 p-8 rounded-xl text-left shadow-xl border border-blue-700/50">
            <div className="flex gap-1 mb-4 text-orange-400">
              {stars.map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-lg italic text-blue-100 mb-6 font-medium leading-relaxed">
              "O Atacadão Ferragista virou meu fornecedor principal. Entrega rápida e material de primeira. Confiança total!"
            </p>
            <div className="mt-auto">
              <p className="font-bold text-orange-400">Marcos Oliveira</p>
              <p className="text-sm text-blue-300">Mestre de Obras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
