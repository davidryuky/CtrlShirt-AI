import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 border-t-4 border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="col-span-2 md:col-span-2">
             <a href="#" className="text-3xl font-heading text-white">
              Ctrl<span className="text-violet-500">Shirt</span>
            </a>
            <p className="mt-6 text-zinc-400 text-lg">Sua loja definitiva para estampas do universo geek. Feitas de fã para fã.</p>
          </div>
          <div>
            <h3 className="text-lg text-zinc-300 tracking-wider uppercase font-heading">Loja</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">Novidades</a></li>
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">Masculino</a></li>
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">Feminino</a></li>
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">Promoções</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-zinc-300 tracking-wider uppercase font-heading">Suporte</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">Política de Troca</a></li>
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">Rastrear Pedido</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-zinc-300 tracking-wider uppercase font-heading">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">Termos</a></li>
              <li><a href="#" className="text-lg text-zinc-400 hover:text-violet-500 transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t-2 border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-lg text-zinc-500">&copy; {new Date().getFullYear()} Ctrl Shirt. All rights reserved.</p>
            <div className="flex space-x-6 mt-6 md:mt-0">
                <a href="#" className="text-zinc-500 hover:text-violet-500 transition-transform hover:scale-110"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
                <a href="#" className="text-zinc-500 hover:text-violet-500 transition-transform hover:scale-110"><span className="sr-only">Instagram</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.585.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg></a>
                <a href="#" className="text-zinc-500 hover:text-violet-500 transition-transform hover:scale-110"><span className="sr-only">Twitter</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.218 3.791 4.649-.562.152-1.152.22-1.76.082.604 1.864 2.343 3.227 4.423 3.266-1.799 1.492-4.01 2.28-6.12 2.015-1.611-.12-3.132-.78-4.482-1.75 2.298 1.543 5.021 2.45 7.91 2.45 9.42 0 14.58-7.83 14.28-14.943.993-.715 1.854-1.613 2.542-2.636z"/></svg></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;