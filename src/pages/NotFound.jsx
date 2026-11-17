import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl font-bold text-hueso">404</h1>
      <p className="mt-2">Esta página fue devorada por los zombis.</p>
      <Link to="/" className="text-hueso underline">
        Volver al inicio
      </Link>
    </div>
  )
}
export default NotFound