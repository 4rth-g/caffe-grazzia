const Footer = () => {
  return (
    <footer className="bg-brand-dark mt-4 px-8 py-10 flex flex-wrap justify-between gap-8 font-serif">
      <div>
        <h3 className="text-xl font-bold tracking-widest uppercase mb-1 text-dourado">
          Caffè Grazzia
        </h3>
        <p className="text-sm italic text-creme/70">Autêntico café brasileiro no meio da cidade</p>
      </div>
      <div>
        <h4 className="text-base font-semibold tracking-wide mb-2 text-dourado">Horários</h4>
        <p className="text-sm text-creme/80">Seg – Sex: 7h às 22h</p>
        <p className="text-sm text-creme/80">Sáb – Dom: 8h às 23h</p>
      </div>
      <div>
        <h5 className="text-base font-semibold tracking-wide mb-2 text-dourado">Endereço</h5>
        <p className="text-sm text-creme/80">Jardins</p>
        <p className="text-sm text-creme/80">Aracaju-SE</p>
      </div>
      <p className="w-full text-center text-xs tracking-widest text-creme/40 pt-4 border-t border-creme/10">
        © 2025 Caffè Grazzia. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
