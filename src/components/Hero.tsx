import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Tubos e Conexões" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 md:py-24 lg:py-32 flex flex-col items-start w-full md:w-3/4 lg:w-3/5">
        <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-sm flex items-center gap-2 mb-6 uppercase tracking-wide">
          <ShieldCheck className="w-4 h-4" />
          Especialista em Tubos e Conexões
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          A Solução Completa em <span className="text-orange-500">Hidráulica</span> para sua Obra.
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
          Economize tempo e dinheiro com o maior estoque de tubos, conexões PVC e ferramentas de Goiânia. Preço de atacado para profissionais e proprietários.
        </p>
        
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-md flex items-center gap-2 transition-colors text-lg mb-6 w-full sm:w-auto justify-center shadow-lg">
          SOLICITAR ORÇAMENTO AGORA
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-2 text-sm text-blue-200">
          <MapPin className="w-4 h-4 text-orange-500" />
          Atendimento Rápido em Goiânia e Região Metropolitana
        </div>
      </div>
    </section>
  );
}
