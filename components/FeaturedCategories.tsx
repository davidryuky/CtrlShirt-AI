import React from 'react';

const categories = [
  { name: 'GAMES', imageUrl: 'https://picsum.photos/400/500?random=10' },
  { name: 'SÉRIES & FILMES', imageUrl: 'https://picsum.photos/400/500?random=11' },
  { name: 'CÓDIGO', imageUrl: 'https://picsum.photos/400/500?random=12' },
  { name: 'ANIMES', imageUrl: 'https://picsum.photos/400/500?random=13' },
];

const FeaturedCategories: React.FC = () => {
  return (
    <div className="bg-zinc-800/50 py-24 sm:py-32 border-y-4 border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-16 font-heading">
          Navegue por Categorias
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative border-pixel border-pixel-hover rounded-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-violet-800/30">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-end justify-center p-6">
                <h3 className="text-white text-xl md:text-2xl text-center text-shadow transform group-hover:scale-105 transition-transform duration-300 font-heading tracking-wider">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;