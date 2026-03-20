import { motion } from 'framer-motion'
import Imagem from "../components/Imagem"

export const imagens = [
  {
    id: 1,
    nome: "Cappuccino",
    descrição: "Espresso com leite vaporizado e espuma cremosa.",
    emoji: "☕"
  },
  {
    id: 2,
    nome: "Tiramisu",
    descrição: "Sobremesa italiana clássica com camadas de biscoitos embebidos em café e creme de mascarpone.",
    emoji: "🍰"
  },
  {
    id: 3,
    nome: "Pão de Queijo",
    descrição: "Delicioso pãozinho brasileiro feito com queijo e polvilho.",
    emoji: "🧀"
  },
  {
    id: 4,
    nome: "Brigadeiro",
    descrição: "Doce brasileiro feito com leite condensado, chocolate e manteiga, enrolado em bolinhas e coberto com granulado de chocolate.",
    emoji: "🍫"
  },
  {
    id: 5,
    nome: "Quiche de Alho-Poró",
    descrição: "Massa crocante recheada com creme de alho-poró.",
    emoji: "🥧"
  },
  {
    id: 6,
    nome: "Bolo de Cenoura",
    descrição: "Bolo úmido de cenoura com cobertura de chocolate.",
    emoji: "🥕"
  },
  {
    id: 7,
    nome: "Pão na Chapa",
    descrição: "Pão francês na manteiga, crocante por fora.",
    emoji: "🍞"
  },
  {
    id: 8,
    nome: "Bruschetta",
    descrição: "Pão italiano tostado com tomate e manjericão fresco.",
    emoji: "🍅"
  },
  {
    id: 9,
    nome: "Espresso",
    descrição: "Curto, encorpado e direto ao ponto.",
    emoji: "☕"
  },
  {
    id: 10,
    nome: "Bolo de Laranja",
    descrição: "Receita da nonna, úmido e com calda cítrica.",
    emoji: "🍊"
  },
  {
    id: 11,
    nome: "Torta de Limão",
    descrição: "Massa crocante com recheio cremoso de limão e merengue.",
    emoji: "🍋"
  },
  {
    id: 12,
    nome: "Brownie de Chocolate",
    descrição: "Denso, fudgy e com pedaços generosos de chocolate.",
    emoji: "🍫"
  }
]

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