
/* Chilren palabra reservada para obtener prop 
**  del contenido de una etiqueta  
*/
const Error = ({ children }) => {
  return (
    <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5 text-center rounded-md">
      { children }
    </p> 
  )
}

export default Error