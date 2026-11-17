function TarjetaItem({ item, enPlan, onVer, onAgregar }) {
  const colores = {
    Refugio: 'bg-musgo text-white',
    Arma: 'bg-tierra text-white',
    Kit: 'bg-hueso text-fondo',
  }

  return (
    <article
      onClick={onVer}
      className="bg-superficie border border-musgo rounded-2xl p-5 cursor-pointer hover:border-hueso transition flex flex-col"
    >
      <span
        className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${colores[item.tipo]}`}
      >
        {item.tipo}
      </span>
      <h3 className="text-xl font-bold mt-3">{item.nombre}</h3>
      <p className="text-hueso/70 mt-2">{item.descripcion}</p>

      <div className="mt-auto pt-4 flex items-center justify-between">
        <span className="text-sm text-hueso/60">Ver detalle</span>
        <button
          onClick={(e) => {
            e.stopPropagation() // evita que se abra el detalle al agregar
            onAgregar()
          }}
          disabled={enPlan}
          className={
            enPlan
              ? 'px-4 py-2 rounded-full text-sm border border-musgo text-hueso/50'
              : 'px-4 py-2 rounded-full text-sm bg-musgo hover:bg-tierra text-white transition'
          }
        >
          {enPlan ? 'En tu plan' : 'Agregar'}
        </button>
      </div>
    </article>
  )
}

export default TarjetaItem