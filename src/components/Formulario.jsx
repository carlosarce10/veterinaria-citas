import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length !== 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  // Generar id
  const generarId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación del formulario
    if ([ nombre, propietario, email, alta, sintomas ].includes('') ) {
      setError(true);
      return;
    }
     setError(false);
     const objPaciente = { 
      nombre, 
      propietario, 
      email, 
      alta, 
      sintomas 
    };

     if (paciente.id) {
      // Editar el objeto Paciente
      objPaciente.id = paciente.id;
      const pacientesEditados = pacientes.map(pacienteState => pacienteState.id === 
        paciente.id ? objPaciente : pacienteState);
      setPacientes(pacientesEditados);
      setPaciente({});
     } else {
      // Crear el objeto Paciente
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente]);
     }

    // Resetear el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas(''); 
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {/* Pasar props a un componente mediante el contenido de la etiqueta */}
        { error && <Error>Todos los campos son obligatorios</Error> }
        <div className="mb-5"> 
          <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">
            Nombre Mascota
          </label> 
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota"
            className="border-2 border-gray-400 p-2 mt-2 rounded-md w-full 
              focus:outline-none focus:border-indigo-600"
            value={ nombre }
            onChange={ (e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5"> 
          <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">
            Nombre propietario
          </label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del Propietario"
            className="border-2 border-gray-400 p-2 mt-2 rounded-md w-full 
              focus:outline-none focus:border-indigo-600"
            value={ propietario }
            onChange={ (e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5"> 
          <label htmlFor="email" className="block text-gray-700 font-bold uppercase">
            Email
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="Email Contacto Propietario"
            className="border-2 border-gray-400 p-2 mt-2 rounded-md w-full 
              focus:outline-none focus:border-indigo-600"
            value={ email }
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5"> 
          <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">
            Alta
          </label>
          <input 
            id="alta"
            type="date" 
            className="border-2 border-gray-400 p-2 mt-2 rounded-md w-full 
              focus:outline-none focus:border-indigo-600"
            value={ alta }
            onChange={ (e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5"> 
          <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">
            síntomas
          </label>
          <textarea 
            id="sintomas"
            type="text" 
            placeholder="Describe los Síntomas"
            className="border-2 border-gray-400 p-2 mt-2 rounded-md w-full 
              focus:outline-none focus:border-indigo-600"
            value={ sintomas }
            onChange={ (e) => setSintomas(e.target.value)}
          />
        </div>
        <input 
          type="submit" 
          value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'}
          className="bg-indigo-600 w-full p-3 text-white uppercase 
            font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
        />
      </form>
    </div>
  )
}

export default Formulario;