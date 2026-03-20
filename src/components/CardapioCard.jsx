import { motion } from 'framer-motion'

const CardapioCard = ({ nome, descricao, preco }) => {
  return (
    <motion.div
      className="bg-creme rounded-lg shadow-md overflow-hidden"
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.35 }}
    >
          <div className="p-4">
        <h3 className="text-xl text-brand-navy font-bold mb-2 font-serif">{nome}</h3>
        <p className="text-brand-dark mb-4 font-serif">{descricao}</p>
        <p className="text-dourado font-bold text-lg font-serif text-right">R$ {preco.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

export default CardapioCard;