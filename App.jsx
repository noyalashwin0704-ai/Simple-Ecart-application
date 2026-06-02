import React from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import products from './components/product';
import './App.css';
function App() {
 return (
 <div className="app">
 <header className="app-header">
 <span className="header-emoji"> </span>
 <h1 className="app-title">
 Vegetables Shop <span className="redux-label">(Redux)</span>
 </h1>
 </header>
 <main className="app-main">
 <section className="products-section">
 <div className="products-grid">
 {products.map((product) => (
 <ProductCard key={product.id} product={product} />
 ))}
 </div>
 </section>
 <section className="cart-section">
 <Cart />
 </section>
 </main>
 </div>
 );
}
export default App;