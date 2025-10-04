import React, { useState } from 'react';
import { Product, CartItem } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';

interface ProductDetailProps {
  product: Product;
  onBackClick: () => void;
  onAddToCart: (item: CartItem) => void;
}

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

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBackClick, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  
  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart({ ...product, selectedSize, quantity });
    } else {
        alert("Por favor, selecione um tamanho.");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={onBackClick}
        className="flex items-center text-violet-500 hover:text-violet-400 text-xl mb-8 transition-colors"
      >
        <ChevronLeftIcon className="h-5 w-5 mr-2" />
        Voltar para a lista
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border-pixel rounded-lg overflow-hidden aspect-square">
          <div
            className={`w-full h-full bg-gradient-to-br ${getGradientById(product.id)}`}
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl text-white font-heading">{product.name}</h1>
          <p className="text-3xl text-amber-400 mt-2">R$ {product.price.toFixed(2)}</p>
          <p className="mt-4 text-zinc-300 text-xl leading-relaxed">{product.description}</p>
          
          <div className="mt-8">
            <h3 className="text-lg font-heading text-white">Tamanho</h3>
            <div className="flex items-center space-x-3 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex items-center justify-center rounded-md border-2 py-3 px-4 text-lg uppercase hover:bg-zinc-700 transition-colors
                  ${selectedSize === size ? 'bg-violet-600 border-violet-500 text-white' : 'border-zinc-600'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
              <h3 className="text-lg font-heading text-white mb-2">Quantidade</h3>
              <div className="flex items-center border-2 border-zinc-600 rounded-md w-fit">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 text-2xl hover:bg-zinc-700 rounded-l-md">-</button>
                  <span className="px-6 py-2 text-2xl">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 text-2xl hover:bg-zinc-700 rounded-r-md">+</button>
              </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-10 w-full btn-pixel text-xl"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;