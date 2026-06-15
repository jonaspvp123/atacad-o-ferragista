import { BadgePercent, Box, Truck, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BadgePercent className="w-8 h-8 text-green-500" />,
      title: "Preço Competitivo",
      desc: "Negociamos direto com fábricas para garantir o melhor preço de atacado para você."
    },
    {
      icon: <Box className="w-8 h-8 text-blue-500" />,
      title: "Estoque Gigante",
      desc: "Não pare sua obra por falta de material. Temos pronta entrega imediata."
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Entrega Expressa",
      desc: "Logística eficiente para Goiânia e região metropolitana. Receba onde precisar."
    },
    {
      icon: <Users className="w-8 h-8 text-gray-700" />,
      title: "Foco no Profissional",
      desc: "Atendimento especializado para pedreiros, encanadores e engenheiros."
    }
  ];

  return (
    <section className="bg-white py-16 px-6 relative z-20 shadow-sm border-b border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-green-50 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
