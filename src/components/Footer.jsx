import { Link } from 'react-router-dom'
import { Skull, Mail, MapPin } from 'lucide-react'

const enlaces = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/test', texto: 'Test' },
  { ruta: '/guia', texto: 'Guía' },
  { ruta: '/contacto', texto: 'Contacto' },
]

function Footer() {
  return (
    <footer className="bg-superficie border-t border-musgo mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Columna 1: marca */}
        <div>
          <div className="flex items-center gap-2 text-hueso font-bold text-xl">
            <Skull />
            Zombie Survival
          </div>
          <p className="text-hueso/70 mt-3 text-sm">
            Descubre qué rol tendrías en el apocalipsis zombi y prepárate con
            nuestra guía de refugios, armas y kits.
          </p>
        </div>

        {/* Columna 2: navegación */}
        <div>
          <h3 className="text-hueso font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm">
            {enlaces.map((e) => (
              <li key={e.ruta}>
                <Link
                  to={e.ruta}
                  className="text-hueso/70 hover:text-white transition"
                >
                  {e.texto}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: contacto */}
        <div>
          <h3 className="text-hueso font-semibold mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm text-hueso/70">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              contacto@zombiesurvival.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Arequipa, Perú
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-musgo py-4 px-4 text-center text-sm text-hueso/60">
        © 2026 Zombie Survival · Proyecto académico UTP · Hecho con React y
        Tailwind CSS
      </div>
    </footer>
  )
}

export default Footer