const Contato = () => {
  return (
    <main className="px-8 py-12 max-w-3xl mx-auto">
      <h2 className="text-dourado text-3xl font-bold mb-6 font-serif">Contato</h2>
      <p className="text-creme opacity-75 text-lg leading-relaxed mb-4 font-serif">
        Para entrar em contato conosco, envie um e-mail para caffe@caffegrazzia.com
        ou ligue para (XX) XXXX-XXXX. Estamos disponíveis de segunda a sexta, das 8h às 18h.
      </p>
      <p className="text-creme opacity-75 text-lg leading-relaxed font-serif">
        Você também pode nos encontrar nas redes sociais:
      </p>
       <ul className="text-creme opacity-75 text-lg leading-relaxed list-disc list-inside font-serif">
  <li>
    <a href="#" className="text-brand-lightest underline">Facebook</a>
    <span className="text-creme opacity-50 text-sm ml-2">(demonstração)</span>
  </li>
  <li>
    <a href="#" className="text-brand-lightest underline">Instagram</a>
    <span className="text-creme opacity-50 text-sm ml-2">(demonstração)</span>
  </li>
  <li>
    <a href="#" className="text-brand-lightest underline">Twitter</a>
    <span className="text-creme opacity-50 text-sm ml-2">(demonstração)</span>
  </li>
</ul>   </main>
  )
}
export default Contato 
