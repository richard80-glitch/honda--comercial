
import './App.css'
import { useState } from 'react'
import { Navbar, HeroSection, FeaturesSection, ProductsSection, Cart } from './components'
import { useCart } from './hooks/useCart'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cart = useCart()

  const handleExploreClick = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    console.log('Contáctanos clicked')
  }

  return (
    <div className="App">
      <Navbar cartCount={cart.getTotalItems()} onCartClick={() => setIsCartOpen(true)} />
      <HeroSection
        onPrimaryClick={handleExploreClick}
        onSecondaryClick={handleContactClick}
      />
      <FeaturesSection />
      <ProductsSection onAddToCart={cart.addToCart} />
      <Cart
        isOpen={isCartOpen}
        cartItems={cart.cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeFromCart}
        totalPrice={cart.getTotalPrice()}
        totalItems={cart.getTotalItems()}
      />
    </div>
  )
}

export default App
