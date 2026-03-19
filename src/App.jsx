import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Button from './components/Button'
import Footer  from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import Reservas from './pages/Reservas.jsx'
import Cardapio from './pages/Cardapio.jsx'
import Galeria from './pages/Galeria.jsx'




function App() {
  return (
    <BrowserRouter>
    <header className="hero">
       <Link to="/"><h1>Caffè Grazzia</h1></Link>
    </header>
    <nav className="hero">
      <div  className="button-container">
      <Link to="/sobre"><Button>Sobre</Button></Link>
      <Link to="/contato"><Button>Contato</Button></Link>
      <Link to="/reservas"><Button>Reservas</Button></Link>
      <Link to="/cardapio"><Button>Cardápio</Button></Link>
      <Link to="/galeria"><Button>Galeria</Button></Link>

      </div>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} /> 
        <Route path="/contato" element={<Contato />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/galeria" element={<Galeria />} /> 

        
      </Routes>
      <Footer />
    </BrowserRouter> 
  )
}

export default App
