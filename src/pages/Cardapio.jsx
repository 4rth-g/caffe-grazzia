import { useState } from "react"
import { motion } from 'framer-motion'
import CardapioCard from "../components/CardapioCard"
import { itens, categorias } from "../data/cardapioData"

const Cardapio = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos")

  const itensFiltrados = categoriaAtiva === "todos"
    ? itens
    : itens.filter(item => item.categoria === categoriaAtiva)

  return (
    <motion.main
      className="px-8 py-12 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-creme text-3xl font-bold mb-6 font-serif">Cardápio</h2>
      <div className="flex gap-3 mb-8 flex-wrap">
        {categorias.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategoriaAtiva(cat.id)}
            className={`cursor-pointer transition-all px-6 py-2 rounded-sm border-b-4 font-serif tracking-widest uppercase text-sm
              ${categoriaAtiva === cat.id
                ? "bg-dourado text-brand-dark border-[#a07830] hover:brightness-110 hover:-translate-y-px hover:border-b-[6px] active:border-b-2 active:brightness-90 active:translate-y-0.5"
                : "bg-brand-blue text-creme border-brand-dark hover:brightness-110 hover:-translate-y-px hover:border-b-[6px] active:border-b-2 active:brightness-90 active:translate-y-0.5"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {itensFiltrados.map(item => (
          <CardapioCard
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
          />
        ))}
      </motion.div>
    </motion.main>
  )
}

export default Cardapio
