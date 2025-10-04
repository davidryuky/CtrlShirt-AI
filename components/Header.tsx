import React, { useState } from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import UserIcon from './icons/UserIcon';
import SearchIcon from './icons/SearchIcon';
import XIcon from './icons/XIcon';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Novidades", "Masculino", "Feminino", "Promoções"];

  return (
    <header className="bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-40 border-b-4 border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-heading text-white group" aria-label="CtrlShirt Home Page">
              Ctrl<span className="text-violet-500 group-hover:text-amber-400 transition-colors duration-300">Shirt</span>
            </a>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(link => (
                <a key={link} href="#" className="text-zinc-300 hover:text-violet-500 text-xl transition-colors duration-300 tracking-wider">
                {link}
                </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-5">
             <div className="hidden sm:flex relative">
                <input type="text" placeholder="Procurar…" className="input-pixel w-56 text-lg focus:w-64 transition-all duration-300"/>
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
            </div>

            <button className="text-zinc-300 hover:text-violet-500 transition-colors duration-300" aria-label="User Account">
              <UserIcon className="h-7 w-7" />
            </button>

            <button onClick={onCartClick} className="relative text-zinc-300 hover:text-violet-500 transition-colors duration-300" aria-label={`View shopping cart with ${cartItemCount} items`}>
              <ShoppingCartIcon className="h-7 w-7" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-3 flex items-center justify-center h-6 w-6 bg-violet-600 text-white font-heading text-xs rounded-full border-2 border-zinc-900">
                  {cartItemCount}
                </span>
              )}
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-300 hover:text-violet-500" aria-label="Open menu">
                 {isMenuOpen ? <XIcon className="h-7 w-7" /> : <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>}
              </button>
            </div>
          </div>
        </div>
      </div>
       {/* Mobile Menu */}
       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-zinc-900 border-t-2 border-zinc-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
             <a key={link} href="#" className="block px-3 py-3 rounded-md text-xl text-zinc-300 hover:text-white hover:bg-zinc-700">
               {link}
             </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;