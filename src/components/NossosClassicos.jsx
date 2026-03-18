import { classicos } from '../data/classicos';
import ClassicosCard from './ClassicosCard.jsx'

const NossosClassicos = () => {
  return(
  <section className="px-8 py-12">
    <h2 className="font-serif text-creme text-3xl font-bold text-center mb-8">
      Nossos Clássicos
    </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {
          classicos.map((item)=> (
          <ClassicosCard
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            imagem={item.imagem}
          />
          ))

        }
      </div>
  </section>
  )
}

export default NossosClassicos
