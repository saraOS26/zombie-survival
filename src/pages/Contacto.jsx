import { useState } from 'react'
import Boton from '../components/Boton'

function Contacto() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const validar = () => {
    const nuevos = {}
    if (nombre.trim().length < 3) {
      nuevos.nombre = 'El nombre debe tener al menos 3 letras.'
    }
    // Revisa que tenga forma de correo: algo@algo.algo
    if (!/^\S+@\S+\.\S+$/.test(correo)) {
      nuevos.correo = 'Escribe un correo válido, por ejemplo: sara@correo.com'
    }
    if (asunto === '') {
      nuevos.asunto = 'Elige un asunto.'
    }
    if (mensaje.trim().length < 10) {
      nuevos.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    }
    return nuevos
  }

  const enviar = (e) => {
    e.preventDefault()
    const nuevos = validar()
    setErrores(nuevos)
    if (Object.keys(nuevos).length === 0) {
      setEnviado(true)
    }
  }

  const nuevoMensaje = () => {
    setNombre('')
    setCorreo('')
    setAsunto('')
    setMensaje('')
    setErrores({})
    setEnviado(false)
  }

  const claseCampo =
    'w-full bg-superficie border-2 border-musgo rounded-xl px-4 py-3 focus:outline-none focus:border-hueso'

  if (enviado) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-hueso">¡Mensaje enviado!</h1>
        <p className="text-hueso/80 mt-4">
          Gracias, {nombre}. Te responderemos antes de que lleguen los zombis.
        </p>
        <div className="mt-8">
          <Boton texto="Enviar otro mensaje" onClick={nuevoMensaje} />
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-hueso mb-6">Contacto</h1>

      <form onSubmit={enviar} className="space-y-6">
        <div>
          <label className="block mb-2">Nombre</label>
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

        <div>
          <label className="block mb-2">Correo</label>
          <input
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className={claseCampo}
          />
          {errores.correo && (
            <p className="text-red-400 text-sm mt-1">{errores.correo}</p>
          )}
        </div>

        <div>
          <label className="block mb-2">Asunto</label>
          <select
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            className={claseCampo}
          >
            <option value="">Selecciona una opción</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="error">Reportar un error</option>
            <option value="otro">Otro</option>
          </select>
          {errores.asunto && (
            <p className="text-red-400 text-sm mt-1">{errores.asunto}</p>
          )}
        </div>

        <div>
          <label className="block mb-2">Mensaje</label>
          <textarea
            rows="5"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className={claseCampo}
          />
          {errores.mensaje && (
            <p className="text-red-400 text-sm mt-1">{errores.mensaje}</p>
          )}
        </div>

        <Boton texto="Enviar mensaje" type="submit" />
      </form>
    </section>
  )
}

export default Contacto