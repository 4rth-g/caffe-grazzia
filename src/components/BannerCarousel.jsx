import { useState, useEffect } from 'react'

const imageModules = import.meta.glob('../assets/*.{jpg,jpeg,png}', { eager: true })
const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => [path.split('/').pop(), mod.default])
)

const slides = [
  {
    title: 'Bem-vindo ao Caffè Grazzia',
    subtitle: 'Onde a paixão pelo café se encontra com a arte de criar momentos inesquecíveis.',
    image: images['stocksnap-croissant-923673.jpg'],
  },
  {
    title: 'Experimente Nossos Blends',
    subtitle: 'Grãos selecionados dos melhores terroirs do mundo, torrados com cuidado artesanal.',
    image: images['danganhfoto-coffee-5567269_1920.jpg'],
  },
  {
    title: 'Reserve Seu Momento',
    subtitle: 'Um ambiente acolhedor para reuniões, trabalho ou simplesmente relaxar com uma boa xícara.',
    image: images['stocksnap-man-2557408.jpg'],
  },
]

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <div className="carousel" style={{ backgroundImage: `url(${slides[current].image})` }}>
      <div className="carousel-overlay" />

      <button className="carousel-btn carousel-btn-left" onClick={prev}>&#8249;</button>

      <div className="carousel-content">
        <h2>{slides[current].title}</h2>
        <p>{slides[current].subtitle}</p>
      </div>

      <button className="carousel-btn carousel-btn-right" onClick={next}>&#8250;</button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerCarousel
