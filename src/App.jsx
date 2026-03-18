import './App.css'
import Button from './components/Button'
import BannerCarousel  from './components/BannerCarousel.jsx'
import Footer  from './components/Footer.jsx'
import NossosClassicos from '../src/components/NossosClassicos.jsx'

function App() {
  return (
    <>
      <header className="hero">
        <h1>Caffè Grazzia</h1>
      </header>
      <nav className="hero">
        <div className="button-container">
          <Button>Sobre</Button>
          <Button>Cardápio</Button>
          <Button>Galeria</Button>
          <Button>Reservas</Button>
          <Button>Contato</Button>
        </div>
      </nav>
      <BannerCarousel />
      <NossosClassicos />
      <Footer />
    
       </>
  )
}

export default App
