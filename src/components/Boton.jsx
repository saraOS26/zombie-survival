import { Link } from 'react-router-dom'

function Boton({ texto, to, onClick, variante = 'primario', type = 'button' }) {
  const estilos = {
    primario: 'bg-musgo hover:bg-tierra text-white',
    secundario:
      'border-2 border-tierra text-hueso hover:bg-tierra hover:text-white',
  }

  const clases = `inline-block px-6 py-3 rounded-full font-semibold transition ${estilos[variante]}`

  if (to) {
    return (
      <Link to={to} className={clases}>
        {texto}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={clases}>
      {texto}
    </button>
  )
}

export default Boton