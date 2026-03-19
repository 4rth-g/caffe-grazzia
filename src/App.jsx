import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Button from './components/Button'
import Footer  from './components/Footer.jsx'
import Home from '../src/pages/Home.jsx'
import Sobre from '../src/pages/Sobre.jsx'
import Contato from '../src/pages/Contato.jsx'
/*import Cardapio from '../src/pages/Cardapio.jsx'
import Galeria from '../src/pages/Galeria.jsx'
import Reservas from '../src/pages/Reservas.jsx'
*/
function App() {
  return (
    <BrowserRouter>
    <header className="hero">
       <Link to="/"><h1>Caffè Grazzia</h1></Link>
    </header>
    <nav className="hero">
      <div  className="button-container">
      <Link to="/sobre"><Button>Sobre</Button></Link>
      <Link to="/cardapio"><Button>Cardápio</Button></Link>
      <Link to="/galeria"><Button>Galeria</Button></Link>
      <Link to="/reservas"><Button>Reservas</Button></Link>
      <Link to="/contato"><Button>Contato</Button></Link>

      </div>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        {/*<Route path="/cardapio" element={<Cardapio />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/reservas" element={<Reservas />} />*/}
      </Routes>
      <Footer />
    </BrowserRouter> 
  )
}

export default App
