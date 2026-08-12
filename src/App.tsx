
import './App.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">🚛 HONDA COMERCIAL</div>
          <div className="navbar-links">
            <a href="#products">Productos</a>
            <a href="#about">Acerca de</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Soluciones Comerciales de Calidad</h1>
          <p>Tecnología confiable para tu negocio</p>
          <div className="button-group">
            <button className="btn btn-primary">Explorar Productos</button>
            <button className="btn btn-secondary">Contáctanos</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">⚙️</div>
          <h3>Confiabilidad</h3>
          <p>Motores probados con años de desempeño</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Economía</h3>
          <p>Bajo consumo de combustible</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔧</div>
          <h3>Servicio</h3>
          <p>Soporte técnico disponible</p>
        </div>
      </section>
    </div>
  )
}

export default App
