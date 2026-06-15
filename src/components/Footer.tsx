import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1e233a] text-slate-300 py-16 px-6 relative border-t-[8px] border-orange-500">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-700/50 pb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-[#e46119] text-white font-black px-2 py-1 rounded text-2xl italic tracking-tighter">
              AFH
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-white leading-tight">ATACADÃO FERRAGISTA</span>
              <span className="text-sm font-black text-white leading-tight">E HIDRÁULICA</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 font-medium max-w-xs">
            O seu parceiro ideal em Goiânia para tubos, conexões, ferramentas e materiais elétricos.
          </p>
        </div>
        
        <div>
          <h3 className="text-[#e46119] font-bold text-lg mb-6">Contato & Localização</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <span className="text-sm font-medium">Goiânia e Região Metropolitana</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <span className="text-sm font-medium">Segunda a Sexta: 07:30 às 18:00</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <span className="text-sm font-medium">(62) 3094-8300</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-[#e46119] font-bold text-lg mb-6">Redes Sociais</h3>
          <div className="flex gap-4 mb-8">
            <a href="#" className="bg-blue-800/50 hover:bg-blue-700 p-2.5 rounded-full text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-blue-800/50 hover:bg-blue-700 p-2.5 rounded-full text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <a href="#" className="text-[#e46119] hover:text-orange-400 transition-colors text-sm font-bold flex items-center gap-1 group">
            Iniciar Orçamento via WhatsApp <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} Atacadão Ferragista e Hidráulica. Todos os direitos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
}
