const CardapioCard = ({ nome, descricao, preco }) => {
  return (
    <div className="bg-creme rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
        <h3 className="text-xl text-brand-navy font-bold mb-2 font-serif">{nome}</h3>
        <p className="text-brand-dark mb-4 font-serif">{descricao}</p>
        <p className="text-dourado font-bold text-lg font-serif text-right">R$ {preco.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CardapioCard;