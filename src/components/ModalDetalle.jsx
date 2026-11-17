import { X } from 'lucide-react'
import Boton from './Boton'

function ModalDetalle({ item, enPlan, onCerrar, onAgregar }) {
  return (
    // Fondo oscuro: al hacer clic afuera, se cierra
    <div
      onClick={onCerrar}
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
    >
      {/* Tarjeta: el clic adentro no cierra */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-superficie border border-musgo rounded-2xl p-6 max-w-md w-full relative"
      >
        <button
          onClick={onCerrar}
          aria-label="Cerrar"
          className="absolute top-4 right-4 text-hueso/70 hover:text-white"
        >
          <X />
        </button>

        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-musgo text-white">
          {item.tipo}
        </span>
        <h2 className="text-2xl font-bold text-hueso mt-3">{item.nombre}</h2>
        <p className="text-hueso/80 mt-2">{item.descripcion}</p>

        <div className="mt-5 space-y-3 text-sm">
          <p>
            <span className="font-semibold text-white">Ventaja: </span>
            {item.ventaja}
          </p>
          <p>
            <span className="font-semibold text-white">Desventaja: </span>
            {item.desventaja}
          </p>
        </div>

        <div className="mt-5">
          <p className="text-sm mb-2">Utilidad: {item.puntos}/5</p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`h-3 w-8 rounded ${i < item.puntos ? 'bg-hueso' : 'bg-fondo'}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          {enPlan ? (
            <p className="text-hueso/60">Ya está en tu plan.</p>
          ) : (
            <Boton texto="Agregar a mi plan" onClick={onAgregar} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalDetalle