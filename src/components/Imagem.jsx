import { motion } from 'framer-motion'

const Imagem = ({ nome, descrição, emoji }) => {
  return (
    <motion.div
      className="bg-brand-dark rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:bg-brand-light hover:scale-105 hover:shadow-xl cursor-pointer"
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.35 }}
    >
      <div className="w-full h-48 flex items-center justify-center bg-brand-dark text-7xl">
        {emoji}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-dourado font-semibold text-lg mb-1">{nome}</h3>
        <p className="font-serif text-creme text-sm opacity-75">{descrição}</p>
      </div>
    </motion.div>
  )
}

export default Imagem
