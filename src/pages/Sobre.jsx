import { motion } from 'framer-motion'

const Sobre = () => {
  return (
    <motion.main
      className="px-8 py-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-dourado text-3xl font-bold mb-6 font-serif">Sobre o Caffè Grazzia</h2>
      <p className="text-creme opacity-75 text-lg leading-relaxed mb-4 font-serif">
        O Grazzia nasceu da mistura que a família carrega no sobrenome — raízes italianas 
        que vieram para o Brasil no começo do século passado e foram, aos poucos, se 
        misturando com tudo que esse país tem de melhor.
      </p>
      <p className="text-creme opacity-75 text-lg leading-relaxed mb-4 font-serif">
        Aqui o espresso é feito do jeito italiano — curto, encorpado, sem pressa na 
        extração. Mas o café que vai na xícara é brasileiro, colhido em terras que a 
        gente conhece e escolhe com cuidado. Essa combinação não foi planejada, 
        aconteceu naturalmente.
      </p>
      <p className="text-creme opacity-75 text-lg leading-relaxed font-serif">
        O espaço é pra quem quer uma pausa de verdade — seja pra trabalhar, conversar 
        ou simplesmente tomar um café bom sem complicação. Bem-vindo ao Grazzia.
      </p>
    </motion.main>
  )
}

export default Sobre
