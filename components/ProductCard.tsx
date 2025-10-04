import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const StarIcon: React.FC<{className: string}> = ({className}) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

const categoryColorMap: { [key: string]: string } = {
  'Código': 'text-green-400',
  'Games': 'text-red-500',
  'Séries & Filmes': 'text-sky-400',
  'Animes': 'text-fuchsia-400',
};

const gradientClasses = [
    'from-violet-500 to-fuchsia-500',
    'from-green-400 to-teal-400',
    'from-red-500 to-orange-500',
    'from-sky-400 to-cyan-400',
    'from-amber-400 to-yellow-500',
    'from-lime-400 to-emerald-500',
    'from-rose-500 to-pink-500',
    'from-indigo-500 to-purple-600',
];
  
const getGradientById = (id: number) => {
    return gradientClasses[id % gradientClasses.length];
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const categoryColor = categoryColorMap[product.category] || 'text-zinc-400';
  
  return (
    <div
      onClick={() => onProductClick(product)}
      className="group relative border-pixel border-pixel-hover rounded-lg overflow-hidden shadow-lg hover:shadow-violet-800/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col"
    >
      <div className="aspect-square w-full overflow-hidden">
        <div
          className={`w-full h-full bg-gradient-to-br ${getGradientById(product.id)} group-hover:scale-110 transition-transform duration-500`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 flex flex-col flex-grow bg-zinc-800">
        <h3 className={`text-xs ${categoryColor} font-heading tracking-widest uppercase`}>{product.category}</h3>
        <h2 className="mt-2 text-xl text-white leading-tight">{product.name}</h2>
        <div className="mt-2 flex items-center">
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-amber-400' : 'text-zinc-600'}`} />
                ))}
            </div>
            <span className="text-zinc-400 text-lg ml-2">({product.reviewCount})</span>
        </div>
        <div className="flex-grow"></div>
        <div className="mt-5 flex justify-between items-center">
             <p className="text-3xl text-white">R${product.price.toFixed(2)}</p>
             <div className="text-lg bg-zinc-700 text-amber-400 font-bold py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                Ver
             </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;