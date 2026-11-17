import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import TarjetaItem from '../components/TarjetaItem'
import Buscador from '../components/Buscador'
import ModalDetalle from '../components/ModalDetalle'
import Mochila from '../components/Mochila'
import { roles } from '../data/testData'

// Cuántos objetos de cada tipo puedes llevar
const LIMITES = { Refugio: 1, Arma: 2, Kit: 2 }

function Guia() {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [tipo, setTipo] = useState('Todos')
  const [plan, setPlan] = useState([])
  const [seleccionado, setSeleccionado] = useState(null)
  const [aviso, setAviso] = useState('')

  // Rol que viene del test (por ejemplo: /guia?rol=medico)
  const [searchParams] = useSearchParams()
  const rolParam = searchParams.get('rol')
  const rol = roles[rolParam]

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('No se pudo cargar la guía')
        return respuesta.json()
      })
      .then((datos) => {
        setItems(datos)
        // Si venimos del test, cargamos el plan ideal del rol
        const rolActual = roles[rolParam]
        if (rolActual) {
          setPlan(datos.filter((item) => rolActual.plan.includes(item.id)))
        }
        setCargando(false)
      })
      .catch(() => {
        setError('No se pudo conectar con la API. ¿Está encendida?')
        setCargando(false)
      })
  }, [rolParam])

  const itemsFiltrados = items.filter(
    (item) =>
      item.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (tipo === 'Todos' || item.tipo === tipo)
  )

  const estaEnPlan = (id) => plan.some((item) => item.id === id)

  const agregar = (item) => {
    const mismoTipo = plan.filter((i) => i.tipo === item.tipo).length
    if (mismoTipo >= LIMITES[item.tipo]) {
      setAviso(
        `Solo puedes llevar ${LIMITES[item.tipo]} de tipo ${item.tipo}. Quita uno para cambiarlo.`
      )
      return
    }
    setPlan([...plan, item])
    setAviso('')
  }

  const quitar = (id) => {
    setPlan(plan.filter((item) => item.id !== id))
    setAviso('')
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-hueso mb-6">
        Guía de supervivencia
      </h1>

      {rol && (
        <div className="bg-superficie border border-tierra rounded-2xl p-4 mb-6 text-sm">
          Este es el plan ideal para{' '}
          <span className="font-bold text-white">{rol.titulo}</span>. Puedes
          quitar o cambiar objetos para ver cómo cambia tu puntaje.
        </div>
      )}

      <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        tipo={tipo}
        setTipo={setTipo}
      />

      {cargando && <p className="text-hueso/70">Cargando guía...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!cargando && !error && itemsFiltrados.length === 0 && (
        <p className="text-hueso/70">No se encontraron resultados.</p>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Tarjetas */}
        <div className="grid gap-6 sm:grid-cols-2">
          {itemsFiltrados.map((item) => (
            <TarjetaItem
              key={item.id}
              item={item}
              enPlan={estaEnPlan(item.id)}
              onVer={() => setSeleccionado(item)}
              onAgregar={() => agregar(item)}
            />
          ))}
        </div>

        {/* Plan de supervivencia */}
        <aside className="order-first lg:order-last lg:sticky lg:top-6 self-start">
          <Mochila
            items={plan}
            limites={LIMITES}
            aviso={aviso}
            onQuitar={quitar}
          />
        </aside>
      </div>

      {/* Ventana de detalle */}
      {seleccionado && (
        <ModalDetalle
          item={seleccionado}
          enPlan={estaEnPlan(seleccionado.id)}
          onCerrar={() => setSeleccionado(null)}
          onAgregar={() => {
            agregar(seleccionado)
            setSeleccionado(null)
          }}
        />
      )}
    </section>
  )
}

export default Guia