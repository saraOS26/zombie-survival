export const roles = {
  lider: {
    titulo: 'El Líder',
    descripcion: 'Organizas al grupo y tomas decisiones difíciles. Sin ti, todos estarían corriendo sin rumbo.',
    plan: ['1', '6', '7', '9', '10'],
  },
  medico: {
    titulo: 'El Médico',
    descripcion: 'Cuidas a los demás y mantienes al grupo con vida. Eres el más valioso del refugio.',
    plan: ['3', '5', '7', '8', '9'],
  },
  explorador: {
    titulo: 'El Explorador',
    descripcion: 'Rápido y con buen sentido de orientación. Encuentras rutas, comida y refugios.',
    plan: ['4', '6', '7', '8', '10'],
  },
  ingeniero: {
    titulo: 'El Ingeniero',
    descripcion: 'Construyes barricadas y trampas con lo que sea. Tu refugio es el más seguro.',
    plan: ['1', '5', '7', '8', '9'],
  },
  cocinero: {
    titulo: 'El Cocinero',
    descripcion: 'Con poca comida haces maravillas y mantienes la moral del grupo en alto.',
    plan: ['2', '5', '7', '8', '9'],
  },
  distraido: {
    titulo: 'El Primero en Caer',
    descripcion: 'Seamos sinceros: no durarías mucho... pero serías el más recordado.',
    plan: ['2', '5', '6', '9', '10'],
  },
}

export const preguntas = [
  {
    id: 1,
    texto: 'Se anuncia el apocalipsis zombi. ¿Qué haces primero?',
    opciones: [
      { texto: 'Reúno a todos y organizo un plan', rol: 'lider' },
      { texto: 'Busco un botiquín para ayudar a los heridos', rol: 'medico' },
      { texto: 'Salgo a ver qué está pasando', rol: 'explorador' },
      { texto: 'Me quedo mirando por la ventana', rol: 'distraido' },
    ],
  },
  {
    id: 2,
    texto: '¿Qué llevas en tu mochila de escape?',
    opciones: [
      { texto: 'Mapa y linterna', rol: 'explorador' },
      { texto: 'Herramientas y cuerda', rol: 'ingeniero' },
      { texto: 'Comida y utensilios de cocina', rol: 'cocinero' },
      { texto: 'Mi celular y unos audífonos', rol: 'distraido' },
    ],
  },
  {
    id: 3,
    texto: 'Encuentran un refugio. ¿Cuál es tu tarea?',
    opciones: [
      { texto: 'Reforzar puertas y ventanas', rol: 'ingeniero' },
      { texto: 'Cocinar para todo el grupo', rol: 'cocinero' },
      { texto: 'Cuidar a los heridos', rol: 'medico' },
      { texto: 'Decidir los turnos de guardia', rol: 'lider' },
    ],
  },
  {
    id: 4,
    texto: 'Un zombi se acerca. ¿Cómo reaccionas?',
    opciones: [
      { texto: 'Corro y busco una ruta de escape', rol: 'explorador' },
      { texto: 'Preparo una trampa rápida', rol: 'ingeniero' },
      { texto: 'Pido calma y organizo al grupo', rol: 'lider' },
      { texto: 'Me congelo del susto', rol: 'distraido' },
    ],
  },
  {
    id: 5,
    texto: '¿Cuál es tu mayor habilidad?',
    opciones: [
      { texto: 'Convencer a los demás', rol: 'lider' },
      { texto: 'Curar heridas', rol: 'medico' },
      { texto: 'Cocinar con casi cualquier cosa', rol: 'cocinero' },
      { texto: 'Orientarme en cualquier lugar', rol: 'explorador' },
    ],
  },
]