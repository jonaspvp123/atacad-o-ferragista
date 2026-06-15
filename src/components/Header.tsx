import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="bg-orange-500 text-white font-bold px-2 py-1 rounded text-xl italic">
          AFH
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-black text-blue-900 leading-tight">ATACADÃO FERRAGISTA</span>
          <span className="text-xs font-black text-blue-900 leading-tight">& HIDRÁULICA</span>
        </div>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2 transition-colors text-sm">
        <Phone className="w-4 h-4 text-white" />
        Orçamento
      </button>
    </header>
  );
}
