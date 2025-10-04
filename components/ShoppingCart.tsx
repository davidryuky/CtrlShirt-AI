import React from 'react';
import { CartItem } from '../types';
import XIcon from './icons/XIcon';
import TrashIcon from './icons/TrashIcon';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, size: string, newQuantity: number) => void;
  onRemoveItem: (productId: number, size: string) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full border-l-4 border-zinc-800">
          <div className="flex items-center justify-between p-6 border-b-4 border-zinc-800">
            <h2 className="text-2xl text-white font-heading">Seu Inventário</h2>
            <button onClick={onClose} className="text-zinc-400 hover:text-white hover:rotate-90 transition-transform duration-300">
              <XIcon className="h-7 w-7" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <svg className="w-28 h-28 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <h3 className="mt-6 text-xl text-white">Seu inventário está vazio</h3>
              <p className="mt-2 text-lg text-zinc-400">Adicione alguns itens épicos!</p>
              <button onClick={onClose} className="mt-8 btn-pixel">
                Continuar a Quest
              </button>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-6">
              <ul className="-my-6 divide-y-2 divide-zinc-800">
                {cartItems.map(item => (
                  <li key={`${item.id}-${item.selectedSize}`} className="flex py-6">
                    <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border-2 border-zinc-700">
                      <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-xl text-white">
                          <h3>{item.name}</h3>
                          <p className="ml-4">R$ {item.price.toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-lg text-zinc-400">Tamanho: {item.selectedSize}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border-2 border-zinc-700 rounded-md">
                          <button onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)} className="px-3 py-1 text-xl hover:bg-zinc-700 transition-colors rounded-l-md">-</button>
                          <span className="px-4 text-lg">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)} className="px-3 py-1 text-xl hover:bg-zinc-700 transition-colors rounded-r-md">+</button>
                        </div>
                        <div className="flex">
                          <button onClick={() => onRemoveItem(item.id, item.selectedSize)} type="button" className="font-medium text-red-500 hover:text-red-400">
                            <TrashIcon className="h-5 w-5"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="border-t-4 border-zinc-800 p-6 bg-zinc-900/50">
              <div className="flex justify-between text-xl text-white">
                <p>Subtotal</p>
                <p>R$ {subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-1 text-lg text-zinc-400">Frete e taxas serão calculados no checkout.</p>
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-amber-500 px-6 py-4 text-xl text-zinc-900 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors btn-pixel">
                  Finalizar Compra
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;