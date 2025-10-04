import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  return (
    <div id="products" className="bg-zinc-900/50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl tracking-tight text-white sm:text-4xl">
            <span className="text-violet-500">&lt;</span> Nossas Estampas <span className="text-violet-500">/&gt;</span>
            </h2>
            <p className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto">Itens dropados especialmente para o seu inventário.</p>
        </div>

        <div className="grid grid-cols-1 gap-y-12 gap-x-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;