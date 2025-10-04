import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <div className="bg-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl tracking-tight text-white sm:text-4xl">Receba <span className="text-violet-500">Novos Drops</span></h2>
                    <p className="mt-4 text-xl text-zinc-400">
                        Inscreva-se para receber loot exclusivo e ser o primeiro a saber sobre novas estampas. Sem spam, apenas itens de qualidade.
                    </p>
                    <form className="mt-10 sm:flex sm:gap-4">
                        <label htmlFor="email-address" className="sr-only">Endereço de e-mail</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="input-pixel text-lg"
                            placeholder="seu-email@dominio.com"
                        />
                        <button
                            type="submit"
                            className="mt-4 sm:mt-0 w-full sm:w-auto sm:flex-shrink-0 btn-pixel text-lg"
                        >
                            Inscrever
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;