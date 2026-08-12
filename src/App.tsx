
import './App.css'
import { Navbar, HeroSection, FeaturesSection, ProductsSection } from './components'

function App() {
  const handleExploreClick = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    console.log('Contáctanos clicked')
  }

  return (
    <div className="App">
      <Navbar />
      <HeroSection
        onPrimaryClick={handleExploreClick}
        onSecondaryClick={handleContactClick}
      />
      <FeaturesSection />
      <ProductsSection />
    </div>
  )
}

export default App
