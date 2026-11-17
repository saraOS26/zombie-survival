import { X } from 'lucide-react'

function Mochila({ items, limites, aviso, onQuitar }) {
  const total = items.reduce((suma, item) => suma + item.puntos, 0)
  const cupos = Object.values(limites).reduce((a, b) => a + b, 0)
  const completo = items.length === cupos

  let veredicto
  if (!completo) {
    veredicto = `Te faltan ${cupos - items.length} objetos para completar tu plan.`
  } else if (total >= 20) {
    veredicto = '¡Sobrevivirás! Tu plan es sólido.'
  } else if (total >= 18) {
    veredicto = 'Tienes posibilidades, pero no te confíes.'
  } else {
    veredicto = 'Se ve complicado... los zombis ya te vieron.'
  }

  return (
    <div className="bg-superficie border border-musgo rounded-2xl p-5">
      <h2 className="text-xl font-bold text-hueso">Tu plan de supervivencia</h2>
      <p className="text-sm text-hueso/60 mt-1">
        {items.length}/{cupos} objetos
      </p>

      {/* Cupos por tipo */}
      <ul className="mt-4 space-y-1 text-sm">
        {Object.keys(limites).map((tipo) => {
          const cantidad = items.filter((i) => i.tipo === tipo).length
          return (
            <li key={tipo} className="flex justify-between">
              <span>{tipo}</span>
              <span>
                {cantidad}/{limites[tipo]}
              </span>
            </li>
          )
        })}
      </ul>

      {/* Objetos elegidos */}
      <ul className="mt-4 space-y-2">
        {items.length === 0 && (
          <li className="text-hueso/60 text-sm">Aún no elegiste nada.</li>
        )}
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-fondo rounded-xl px-3 py-2 text-sm"
          >
            <span>{item.nombre}</span>
            <button
              onClick={() => onQuitar(item.id)}
              aria-label={`Quitar ${item.nombre}`}
              className="text-hueso/60 hover:text-white"
            >
              <X size={16} />
            </button>
          </li>
        ))}
      </ul>

      {aviso && <p className="text-red-400 text-sm mt-4">{aviso}</p>}

      <div className="mt-5 border-t border-musgo pt-4">
        <p className="text-sm text-hueso/70">Puntaje de supervivencia</p>
        <p className="text-3xl font-extrabold text-hueso">{total}</p>
        <p className="mt-2 text-sm">{veredicto}</p>
      </div>
    </div>
  )
}

export default Mochila