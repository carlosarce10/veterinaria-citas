const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente

  const handlerEliminarPaciente = () => {
   const confirmarEliminar = confirm('¿Estás seguro de eliminar este paciente?');
    if (confirmarEliminar) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-3">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">{ nombre }</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">{ propietario }</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">{ email }</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: {''}
        <span className="font-normal normal-case">{ alta }</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {''}
        <span className="font-normal normal-case">{ sintomas }</span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="px-10 bg-indigo-500 hover:bg-indigo-600 p-2 text-white uppercase font-bold rounded-lg"
          onClick={ () => setPaciente(paciente)}
        >
          Editar paciente
        </button>
        <button
          type="button"
          className="px-10 bg-red-500 hover:bg-red-600 p-2 text-white uppercase font-bold rounded-lg"
          onClick={handlerEliminarPaciente}
        >
          Eliminar &times;
        </button>
      </div>
    </div>
  )
}

export default Paciente