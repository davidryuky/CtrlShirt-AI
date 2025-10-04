import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import FeaturedCategories from './components/FeaturedCategories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const MOCK_PRODUCTS: Product[] = [
    { id: 1, name: 'Camiseta "Hello World"', description: 'A clássica saudação de todo programador, agora em 100% algodão premium. Perfeita para quebrar o gelo em qualquer evento de tech.', price: 79.90, category: 'Código', sizes: ['P', 'M', 'G', 'GG'], rating: 4.8, reviewCount: 102 },
    { id: 2, name: 'Camiseta "Git Commit"', description: 'Para aqueles que vivem um commit de cada vez. Feita com tecido respirável, ideal para longas sessões de codificação.', price: 84.90, category: 'Código', sizes: ['P', 'M', 'G'], rating: 4.9, reviewCount: 256 },
    { id: 3, name: 'Moletom "The Witcher"', description: '"Toss a coin to your Witcher!" Mostre seu apoio a Geralt de Rivia com este moletom confortável e estiloso.', price: 159.90, category: 'Games', sizes: ['M', 'G', 'GG'], rating: 4.7, reviewCount: 88 },
    { id: 4, name: 'Camiseta "Level Up"', description: 'Suba de nível no estilo. Design minimalista para gamers que apreciam um bom easter egg.', price: 79.90, category: 'Games', sizes: ['P', 'M', 'G', 'GG'], rating: 4.6, reviewCount: 150 },
    { id: 5, name: 'Camiseta "Stark Industries"', description: 'Junte-se à equipe do gênio, bilionário, playboy e filantropo. Tecnologia e estilo em uma só peça.', price: 89.90, category: 'Séries & Filmes', sizes: ['P', 'M', 'GG'], rating: 4.9, reviewCount: 312 },
    { id: 6, name: 'Camiseta "Sharingan"', description: 'Desperte seu Mangekyō com esta camiseta inspirada no universo de Naruto. Dattebayo!', price: 82.50, category: 'Animes', sizes: ['P', 'M', 'G'], rating: 4.8, reviewCount: 189 },
    { id: 7, name: 'Camiseta "It\'s a Trap!"', description: 'Um clássico imortal de Star Wars. Perfeita para alertar seus amigos sobre emboscadas... ou reuniões de segunda-feira.', price: 75.00, category: 'Séries & Filmes', sizes: ['M', 'G', 'GG'], rating: 4.7, reviewCount: 95 },
    { id: 8, name: 'Moletom "Plus Ultra"', description: 'Vá além com este moletom de My Hero Academia. Ideal para treinar e se tornar o herói número 1.', price: 169.90, category: 'Animes', sizes: ['P', 'G', 'GG'], rating: 4.9, reviewCount: 201 },
];

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    useEffect(() => {
        // Simula o carregamento dos produtos
        setProducts(MOCK_PRODUCTS);
    }, []);

    const handleSelectProduct = (product: Product) => {
        setSelectedProduct(product);
        window.scrollTo(0, 0);
    };

    const handleBackToList = () => {
        setSelectedProduct(null);
    };

    const handleToggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleAddToCart = (itemToAdd: CartItem) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === itemToAdd.id && item.selectedSize === itemToAdd.selectedSize);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === itemToAdd.id && item.selectedSize === itemToAdd.selectedSize
                        ? { ...item, quantity: item.quantity + itemToAdd.quantity }
                        : item
                );
            }
            return [...prevItems, itemToAdd];
        });
        setIsCartOpen(true);
    };
    
    const handleUpdateQuantity = (productId: number, size: string, newQuantity: number) => {
        if (newQuantity < 1) {
            handleRemoveItem(productId, size);
            return;
        }
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId && item.selectedSize === size
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const handleRemoveItem = (productId: number, size: string) => {
        setCartItems(prevItems =>
            prevItems.filter(item => !(item.id === productId && item.selectedSize === size))
        );
    };

    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="flex flex-col min-h-screen bg-zinc-900">
            <Header cartItemCount={cartItemCount} onCartClick={handleToggleCart} />
            <main className="flex-grow">
                {selectedProduct ? (
                    <ProductDetail product={selectedProduct} onBackClick={handleBackToList} onAddToCart={handleAddToCart} />
                ) : (
                    <>
                        <Hero />
                        <FeaturedCategories />
                        <ProductGrid products={products} onProductClick={handleSelectProduct} />
                        <Newsletter />
                    </>
                )}
                <ShoppingCart 
                    isOpen={isCartOpen}
                    onClose={handleToggleCart}
                    cartItems={cartItems}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                />
            </main>
            <Footer />
        </div>
    );
};

export default App;