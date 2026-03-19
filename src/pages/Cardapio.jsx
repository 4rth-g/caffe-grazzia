import { useState } from "react"
import CardapioCard from "../components/CardapioCard"

export const itens = [
  {
    id: 1,
    nome: "Espresso",
    descricao: "Curto, encorpado e direto ao ponto.",
    categoria: "cafes",
    preco: 7.00
  },
  {
    id: 2,
    nome: "Cappuccino",
    descricao: "Espresso com leite vaporizado e espuma cremosa.",
    categoria: "cafes",
    preco: 12.00
  },
  {
    id: 3,
    nome: "Café com Leite",
    descricao: "Café brasileiro coado na hora com leite quente.",
    categoria: "cafes",
    preco: 9.00
  },
  {
    id: 4,
    nome: "Croissant de Amêndoas",
    descricao: "Folhado crocante recheado com creme de amêndoas.",
    categoria: "doces",
    preco: 14.00
  },
  {
    id: 5,
    nome: "Bolo de Laranja",
    descricao: "Receita da nonna, úmido e com calda cítrica.",
    categoria: "doces",
    preco: 11.00
  },
  {
    id: 6,
    nome: "Pão na Chapa",
    descricao: "Pão francês na manteiga, crocante por fora.",
    categoria: "salgados",
    preco: 8.00
  },
  {
    id: 7,
    nome: "Bruschetta",
    descricao: "Pão italiano tostado com tomate e manjericão fresco.",
    categoria: "salgados",
    preco: 16.00
  },
  {
    id: 8,
    nome: "Quiche de Alho-Poró",
    descricao: "Massa crocante recheada com creme de alho-poró.",
    categoria: "salgados",
    preco: 18.00
  },
  {
    id: 9,
    nome: "Torta de Limão",
    descricao: "Massa crocante com recheio cremoso de limão e merengue.",
    categoria: "doces",
    preco: 13.00
  },
  {
    id: 10,
    nome: "Mocha",
    descricao: "Espresso com chocolate e leite vaporizado.",
    categoria: "cafes",
    preco: 14.00
  },
  {
    id: 11,
    nome: "Pão de Queijo",
    descricao: "Clássico brasileiro, macio por dentro e crocante por fora.",
    categoria: "salgados",
    preco: 10.00
  },
  {
    id: 12,
    nome: "Brownie de Chocolate",
    descricao: "Denso, fudgy e com pedaços generosos de chocolate.",
    categoria: "doces",
    preco: 12.00
  }
]

export const categorias = [
  { id: "todos", label: "Todos" },
  { id: "cafes", label: "Cafés" },
  { id: "doces", label: "Doces" },
  { id: "salgados", label: "Salgados" }
]

const Cardapio = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos")

  const itensFiltrados = categoriaAtiva === "todos"
    ? itens
    : itens.filter(item => item.categoria === categoriaAtiva)

  return (
    <main className="px-8 py-12 max-w-5xl mx-auto">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itensFiltrados.map(item => (
          <CardapioCard
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
          />
        ))}
      </div>
    </main>
  )
}

export default Cardapio
