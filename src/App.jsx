import './App.css'
import Button from './components/Button'

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
    
       </>
  )
}

export default App
