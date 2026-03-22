import { useState } from "react"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Reservas = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pessoas: "",
    data: "",
    hora: ""
  })

  const [honeypot, setHoneypot] = useState("")
  const [enviado  , setEnviado] = useState(false)
  const [erro, setErro] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(honeypot) return
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setEnviado(true)
    } catch {
      setErro(true)
    }
  }

  if (enviado) {
    return (
      <motion.main
        className="px-8 py-12 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-creme text-3xl font-bold mb-6 font-serif">Reserva Enviada!</h2>
        <p className="text-creme opacity-75 text-lg leading-relaxed mt-8 font-serif">
          Obrigado por reservar conosco! Entraremos em contato em breve para confirmar sua reserva.
        </p>
        <p className="text-red-500 opacity-75 text-sm leading-relaxed mt-6 font-serif">
          Este projeto é exclusivamente acadêmico. Não se trata de um sistema de reservas comercial.
        </p>
      </motion.main>
    )
  }

  return (
    <motion.main
      className="px-8 py-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      <h2 className="text-creme text-3xl font-bold mb-6 font-serif">Reservas</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
       <input type="text"  
              value={honeypot} 
              onChange={(e) => setHoneypot(e.target.value)} 
              style={{ display: 'none' }} />
       
       
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} required className="w-full mb-4 px-4 py-2 bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="email" name="email" placeholder="E-mail" value={formData.email} required className="w-full mb-4 px-4 py-2 bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="tel" name="telefone" placeholder="Telefone" value={formData.telefone} required className="w-full mb-4 px-4 py-2 bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="number" name="pessoas" placeholder="Número de pessoas" min="1" max="20" value={formData.pessoas} required className="w-full mb-4 px-4 py-2 bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="date" name="data" value={formData.data} required className="w-full mb-4 px-4 py-2 text-texto-form bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <input type="time" name="hora" value={formData.hora} required className="w-full mb-4 px-4 py-2 text-texto-form bg-creme border border-creme rounded font-serif" onChange={handleChange} />
        <button type="submit" className="bg-dourado text-creme px-6 py-2 rounded font-serif">Reservar</button>
      </form>

      {erro && (
        <p className="text-red-500 mt-4 font-serif">Ocorreu um erro ao enviar sua reserva. Por favor, tente novamente.</p>
      )}
      <p className="text-red-500 opacity-75 text-sm leading-relaxed mt-8 font-serif">
        Este projeto é exclusivamente acadêmico. Não se trata de um sistema de reservas comercial.
      </p>
    </motion.main>
  )
}
export default Reservas
