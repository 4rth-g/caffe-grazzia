const Imagem = ({ nome, descrição, emoji }) => {
  return (
    <div className="bg-fundo-escuro rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:bg-brand-light hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="w-full h-48 flex items-center justify-center bg-brand-dark text-7xl">
        {emoji}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-dourado font-semibold text-lg mb-1">{nome}</h3>
        <p className="font-serif text-creme text-sm opacity-75">{descrição}</p>
      </div>
    </div>
  )
}

export default Imagem
