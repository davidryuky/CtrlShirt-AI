import React, { useEffect } from 'react';
import ChestIcon from './icons/ChestIcon';

interface AddToCartToastProps {
  productName: string | null;
  onClose: () => void;
}

const AddToCartToast: React.FC<AddToCartToastProps> = ({ productName, onClose }) => {
  useEffect(() => {
    if (productName) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // O toast desaparecerá após 3 segundos

      return () => clearTimeout(timer);
    }
  }, [productName, onClose]);

  if (!productName) {
    return null;
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-50 w-full max-w-sm border-pixel border-violet-500 bg-zinc-800 rounded-lg shadow-2xl shadow-violet-900/50 animate-toast-in-right"
      role="alert"
      aria-live="assertive"
    >
      <div className="p-5 flex items-start space-x-4">
        <div className="flex-shrink-0 text-amber-400">
          <ChestIcon className="h-10 w-10" />
        </div>
        <div className="flex-grow">
          <h3 className="font-heading text-lg text-amber-400">LOOT ADQUIRIDO!</h3>
          <p className="mt-1 text-zinc-200 text-lg leading-tight">
            <span className="font-bold text-white">{productName}</span> foi adicionado ao seu inventário.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-zinc-500 hover:text-white transition-colors"
          aria-label="Fechar notificação"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default AddToCartToast;