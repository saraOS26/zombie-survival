import { useState } from 'react'
import { preguntas, roles } from '../data/testData'
import Boton from '../components/Boton'

function Test() {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [respuestas, setRespuestas] = useState({})
  const [errores, setErrores] = useState({})
  const [resultado, setResultado] = useState(null)

  const elegirRespuesta = (idPregunta, rol) => {
    setRespuestas({ ...respuestas, [idPregunta]: rol })
  }

  const validar = () => {
    const nuevos = {}
    if (nombre.trim().length < 3) {
      nuevos.nombre = 'El nombre debe tener al menos 3 letras.'
    }
    const edadNum = Number(edad)
    if (!edad || edadNum < 10 || edadNum > 99) {
      nuevos.edad = 'Escribe una edad entre 10 y 99.'
    }
    if (Object.keys(respuestas).length < preguntas.length) {
      nuevos.preguntas = 'Responde todas las preguntas.'
    }
    return nuevos
  }

  const enviar = (e) => {
    e.preventDefault()
    const nuevos = validar()
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return

    // Contar cuántas veces salió cada rol
    const conteo = {}
    Object.values(respuestas).forEach((rol) => {
      conteo[rol] = (conteo[rol] || 0) + 1
    })

    // El rol con más puntos es el ganador
    const ganador = Object.keys(conteo).reduce((a, b) =>
      conteo[a] >= conteo[b] ? a : b
    )
    setResultado(ganador)
  }

  const reiniciar = () => {
    setNombre('')
    setEdad('')
    setRespuestas({})
    setErrores({})
    setResultado(null)
  }

  const claseCampo =
    'w-full bg-superficie border-2 border-musgo rounded-xl px-4 py-3 focus:outline-none focus:border-hueso'

  // Si ya hay resultado, mostramos la tarjeta final
  if (resultado) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-hueso/70">
          {nombre}, con {edad} años, en el apocalipsis serías...
        </p>
        <h1 className="text-5xl font-extrabold text-hueso mt-4">
          {roles[resultado].titulo}
        </h1>
        <p className="text-lg text-hueso/80 mt-6">
          {roles[resultado].descripcion}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Boton texto="Repetir el test" onClick={reiniciar} />
          <Boton
            texto="Armar mi plan ideal"
            to={`/guia?rol=${resultado}`}
            variante="secundario"
          />
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-hueso mb-6">
        ¿Qué rol tendrías?
      </h1>

      <form onSubmit={enviar} className="space-y-6">
        {/* Nombre */}
        <div>
          <label className="block mb-2">Tu nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={claseCampo}
          />
          {errores.nombre && (
            <p className="text-red-400 text-sm mt-1">{errores.nombre}</p>
          )}
        </div>

        {/* Edad */}
        <div>
          <label className="block mb-2">Tu edad</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className={claseCampo}
          />
          {errores.edad && (
            <p className="text-red-400 text-sm mt-1">{errores.edad}</p>
          )}
        </div>

        {/* Preguntas */}
        {preguntas.map((p) => (
          <fieldset key={p.id} className="bg-superficie border border-musgo rounded-2xl p-5">
            <legend className="font-semibold px-2">
              {p.id}. {p.texto}
            </legend>
            <div className="space-y-2 mt-2">
              {p.opciones.map((op) => (
                <label key={op.texto} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name={`pregunta-${p.id}`}
                    checked={respuestas[p.id] === op.rol}
                    onChange={() => elegirRespuesta(p.id, op.rol)}
                    className="accent-hueso"
                  />
                  <span>{op.texto}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        {errores.preguntas && (
          <p className="text-red-400">{errores.preguntas}</p>
        )}

        <Boton texto="Ver mi resultado" type="submit" />
      </form>
    </section>
  )
}

export default Test