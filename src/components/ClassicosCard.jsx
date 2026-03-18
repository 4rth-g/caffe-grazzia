const ClassicosCard = ({ nome, descricao, imagem }) => {
  return(
  <div className="bg-fundo-escuro rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:bg-brand-light hover:scale-105 hover:shadow-xl cursor-pointer">
      <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-serif text-dourado font-semibold text-lg mb-1">{nome}</h3>
        <p className="font-serif text-creme text-sm opacity-75">{descricao}</p>
      </div>
    </div>
  )
}

export default ClassicosCard
