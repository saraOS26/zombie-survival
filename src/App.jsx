import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Test from './pages/Test'
import Guia from './pages/Guia'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-fondo text-hueso">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/test" element={<Test />} />
        <Route path="/guia" element={<Guia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App