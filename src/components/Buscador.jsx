function Buscador({ busqueda, setBusqueda, tipo, setTipo }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar por nombre..."
        className="flex-1 bg-superficie border-2 border-musgo rounded-full px-5 py-3 focus:outline-none focus:border-hueso"
      />
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="bg-superficie border-2 border-musgo rounded-full px-5 py-3 focus:outline-none focus:border-hueso"
      >
        <option value="Todos">Todos</option>
        <option value="Refugio">Refugios</option>
        <option value="Arma">Armas</option>
        <option value="Kit">Kits</option>
      </select>
    </div>
  )
}

export default Buscador