import './App.css'
import { useState } from 'react'

import {
  Navbar,
  HeroSection,
  FeaturesSection,
  ProductsSection,
  Cart
} from './components'

import { useCart } from './hooks/useCart'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cart = useCart()

  const handleExploreClick = () => {
    document
      .getElementById('products')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">

      <Navbar
        cartCount={cart.getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <HeroSection
        onPrimaryClick={handleExploreClick}
        onSecondaryClick={handleContactClick}
      />

      <FeaturesSection />

      {/* PRODUCTOS */}
      <ProductsSection onAddToCart={cart.addToCart} />

      {/* ACERCA DE */}
      <section id="about" className="about-section">

        <div className="about-container">

          <div className="about-header">
            <span className="section-label">HONDA COMERCIAL</span>

            <h2>Acerca de nosotros</h2>

            <p>
              Soluciones y productos para vehículos comerciales Honda,
              pensados para ofrecer calidad, confiabilidad y buen rendimiento.
            </p>
          </div>

          <div className="about-grid">

            <div className="about-card">
              <div className="about-icon">🚗</div>

              <h3>Calidad</h3>

              <p>
                Ofrecemos productos y componentes seleccionados para ayudar
                a mantener el buen funcionamiento de tu vehículo.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">⭐</div>

              <h3>Experiencia</h3>

              <p>
                Nuestro objetivo es brindar una experiencia sencilla y
                confiable para encontrar los productos que necesitas.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">🤝</div>

              <h3>Compromiso</h3>

              <p>
                Trabajamos para ofrecer atención y soluciones adecuadas
                para nuestros clientes.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACTO */}
      <section id="contact" className="contact-section">

        <div className="contact-container">

          <div className="contact-header">

            <span className="section-label">CONTACTO</span>

            <h2>Contáctanos</h2>

            <p>
              ¿Tienes alguna pregunta? Envíanos un mensaje y estaremos
              encantados de ayudarte.
            </p>

          </div>

          <div className="contact-content">

            <div className="contact-info">

              <div className="contact-item">
                <span>📞</span>

                <div>
                  <h3>Teléfono</h3>
                  <p>+1 (809) 000-0000</p>
                </div>
              </div>

              <div className="contact-item">
                <span>📧</span>

                <div>
                  <h3>Correo</h3>
                  <p>contacto@hondacomercial.com</p>
                </div>
              </div>

              <div className="contact-item">
                <span>📍</span>

                <div>
                  <h3>Ubicación</h3>
                  <p>República Dominicana</p>
                </div>
              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault()
                alert('¡Gracias por contactarnos!')
              }}
            >

              <input
                type="text"
                placeholder="Nombre"
                required
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                required
              />

              <textarea
                placeholder="Escribe tu mensaje..."
                rows={5}
                required
              />

              <button type="submit">
                Enviar mensaje
              </button>

            </form>

          </div>

        </div>

      </section>

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
