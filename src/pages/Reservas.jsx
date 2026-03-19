import { useState } from "react"
const Reservas = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pessoas: "",
    data: "",
    hora: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reserva:', formData)
    // Handle form submission logic here
  }

  return (
    <main className="px-8 py-12 max-w-3xl mx-auto">
      <h2 className="text-creme text-3xl font-bold mb-6 font-serif">Reservas</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" className="w-full mb-4 px-4 py-2 bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="email" name="email" placeholder="E-mail" className="w-full mb-4 px-4 py-2 bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="tel" name="telefone" placeholder="Telefone" className="w-full mb-4 px-4 py-2 bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="number" name="pessoas" placeholder="Número de pessoas" min="1" max="20" className="w-full mb-4 px-4 py-2 bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="date" name="data" className="w-full mb-4 px-4 py-2 text-texto-form bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="time" name="hora" className="w-full mb-4 px-4 py-2 text-texto-form bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <button type="submit" className="bg-dourado text-creme px-6 py-2 rounded font-serif">Reservar</button>
      </form>
      
      <p className="text-creme opacity-75 text-lg leading-relaxed mt-8 font-serif">
        
        Para reservar uma mesa, por favor entre em contato conosco pelo telefone (XX) XXXX-XXXX ou pelo e-mail caffe@caffegrazzia.com
      </p>
    </main>
  )
}
export default Reservas                     