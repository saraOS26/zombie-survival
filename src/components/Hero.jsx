import Boton from './Boton'

function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-hueso">
        ¿Sobrevivirías al apocalipsis zombi?
      </h1>
      <p className="mt-6 text-lg text-hueso/80 max-w-2xl mx-auto">
        Responde el test, descubre qué rol tendrías en el fin del mundo y
        prepárate con nuestra guía de refugios, armas y kits.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Boton texto="Hacer el test" to="/test" />
        <Boton texto="Ver la guía" to="/guia" variante="secundario" />
      </div>
    </section>
  )
}

export default Hero