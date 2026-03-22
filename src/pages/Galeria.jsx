import { motion } from 'framer-motion'
import Imagem from "../components/Imagem"
import { imagens } from "../data/galeriaData"

const Galeria = () => {
  return (
    <motion.main
      className="px-8 py-12 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-dourado text-3xl font-bold mb-6 font-serif">Galeria</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {imagens.map(imagem => (
          <Imagem key={imagem.id} nome={imagem.nome} descrição={imagem.descrição} emoji={imagem.emoji} />
        ))}
      </motion.div>
    </motion.main>
  )
}

export default Galeria
