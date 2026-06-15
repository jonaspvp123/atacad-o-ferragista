export default function Categories() {
  const categories = [
    {
      title: "Tubos e Conexões",
      img: "https://images.unsplash.com/photo-1620247509176-02e07971a8f4?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Materiais Elétricos",
      img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Equipamentos para Obra",
      img: "https://images.unsplash.com/photo-1541888086925-920a0b2fe46d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="bg-white pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden flex flex-col group cursor-pointer shadow-md border border-gray-200">
              <div className="aspect-video w-full overflow-hidden">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="bg-blue-900 w-full px-6 py-4">
                 <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-6 italic">Para que as imagens apareçam, coloque os arquivos na pasta: fotos/ (na raiz do projeto).</p>
      </div>
    </section>
  );
}
