import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-zinc-900 overflow-hidden border-b-4 border-zinc-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-center opacity-20"
          src="https://picsum.photos/seed/gamerdesk/1920/1080"
          alt="Mesa de um gamer com vários itens da cultura pop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900/50"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight text-shadow animate-fade-in-up leading-relaxed">
          Sua Quest Diária:
          <span className="block text-amber-400 mt-4">Estilo e Conforto.</span>
        </h1>
        <p className="mt-8 max-w-lg mx-auto text-2xl text-zinc-300 sm:max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Camisetas e moletons forjados para heróis do dia a dia. Do código ao controle, vista sua paixão.
        </p>
        <div className="mt-12 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid">
            <a
              href="#products"
              className="btn-pixel text-xl"
            >
              Ver Arsenal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;