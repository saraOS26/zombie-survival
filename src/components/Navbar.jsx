import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Skull } from 'lucide-react'

const enlaces = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/test', texto: 'Test' },
  { ruta: '/guia', texto: 'Guía' },
  { ruta: '/contacto', texto: 'Contacto' },
]

function Navbar() {
  const [abierto, setAbierto] = useState(false)

  const estiloEnlace = ({ isActive }) =>
    isActive
      ? 'text-white font-bold'
      : 'text-hueso/70 hover:text-white'

  return (
    <nav className="bg-superficie border-b border-musgo">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-hueso font-bold text-xl">
          <Skull />
          Zombie Survival
        </div>

        {/* Botón hamburguesa (solo en celular) */}
        <button
          className="md:hidden text-hueso"
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? <X /> : <Menu />}
        </button>

        {/* Menú en computadora */}
        <ul className="hidden md:flex gap-6">
          {enlaces.map((e) => (
            <li key={e.ruta}>
              <NavLink to={e.ruta} className={estiloEnlace}>
                {e.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú en celular */}
      {abierto && (
        <ul className="md:hidden flex flex-col gap-3 px-4 pb-4">
          {enlaces.map((e) => (
            <li key={e.ruta}>
              <NavLink
                to={e.ruta}
                className={estiloEnlace}
                onClick={() => setAbierto(false)}
              >
                {e.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar