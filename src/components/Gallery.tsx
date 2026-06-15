import { Image } from 'lucide-react';

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-2">
          <Image className="w-8 h-8 text-[#e46119]" />
          <h2 className="text-3xl font-extrabold text-gray-900">Fotos da Loja</h2>
        </div>
        <p className="text-gray-600 mb-8 font-medium">Conheça nossa estrutura e alguns dos principais setores.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=400&q=80" alt="Setor 1" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
             <img src="https://images.unsplash.com/photo-1620247509176-02e07971a8f4?auto=format&fit=crop&w=400&q=80" alt="Setor 2" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
             <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=400&q=80" alt="Setor 3" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
             <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=400&q=80" alt="Setor 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
