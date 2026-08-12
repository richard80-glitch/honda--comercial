
import './App.css'
import { Navbar, HeroSection, FeaturesSection } from './components'

function App() {
  const handleExploreClick = () => {
    console.log('Explorar Productos clicked')
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
    </div>
  )
}

export default App
