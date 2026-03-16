const Footer = () => {
  return (
    <footer className="bg-[#12293d] text-white mt-4 px-8 py-10 flex flex-wrap justify-between gap-8">
      <div>
        <h3 className="font-['Playfair_Display'] text-xl font-bold tracking-widest uppercase mb-1">
          Caffè Grazzia
        </h3>
        <p className="text-sm text-white/70">Autêntico café brasileiro no meio da cidade</p>
      </div>
      <div>
        <h4 className="font-['Playfair_Display'] text-base font-semibold mb-2">Horários</h4>
        <p className="text-sm text-white/70">Seg – Sex: 7h às 22h</p>
        <p className="text-sm text-white/70">Sáb – Dom: 8h às 23h</p>
      </div>
      <div>
        <h5 className="font-['Playfair_Display'] text-base font-semibold mb-2">Endereço</h5>
        <p className="text-sm text-white/70">Jardins</p>
        <p className="text-sm text-white/70">Aracaju-SE</p>
      </div>
      <p className="w-full text-center text-xs text-white/40 pt-4 border-t border-white/10">
        © 2025 Caffè Grazzia. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
