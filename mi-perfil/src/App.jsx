import { useState } from "react";

function App() {
  const [perfil, setPerfil] = useState({
    nombre: '',
    edad: '',
    ciudad:'',
    hobbies:'',
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setPerfil({...perfil,[name]:value})
  }
  const esMayorDeEdad = Number(perfil.edad) >= 18
  const hobbiesLista = perfil.hobbies
  .split(',')
  .map(h => h.trim())
  .filter(h => h !== '')

  return(
    <div style ={{maxWidth: '500px', margin: 'auto', fontFamily: 'sans-serif'}}>
      <h1>Formulario en Tiempo Real</h1>
      <label htmlFor="">Nombre:</label>
      <input name= "nombre" value={perfil.nombre} onChange={handleChange} placeholder="Ej. Rafi" style={{display: 'block', width: '100%', marginBottom: '10'}}/>p
      <label htmlFor="">Edad:</label>
      <input name = "edad" type = "number" value={perfil.edad} onChange={handleChange} placeholder="Ej. 23" style={{displey: 'block', width: '100%', marginBottom: '10'}} />
      <label htmlFor="">Ciudad:</label>
      <input name="ciudad" value={perfil.ciudad} onChange={handleChange} placeholder="Ej. Cucuta" style={{displey: 'block', width: '100%', marginBottom: '10'}} />
      <label htmlFor="">Hobbies (separado por coma):</label>
      <input name="hobbies" value={perfil.hobbies} onChange={handleChange} placeholder="Ej. Programar, videojuegos" style={{displey: 'block', width: '100%', marginBottom: '10'}}/>
      <hr />
      <h2>Vista Previa:</h2>
      <p><strong>Nombre:</strong> {perfil.nombre || '---'}</p>
      <p><strong>Edad:</strong> {perfil.edad || '---'}</p>
      <p><strong>Ciudad:</strong> {perfil.ciudad || '---'}</p>
      
      <p>
        <strong>¿Es Mayor de Edad?:</strong> {perfil.edad === '' ? '---' : (esMayorDeEdad ? 'Si, es mayor de edad': 'No es mayor de edad')}
      </p>
      <p><strong>Hobbies ({hobbiesLista.length}):</strong></p>
      <ul>
        {hobbiesLista.map((hobby, index) => (
          <li key={index}>{hobby}</li>
          ))}
      </ul>
      <pre style={{background: '#f0f0f0', padding: '10'}}>
        {JSON.stringify({ ...perfil, esMayorDeEdad, hobbiesLista}, null,2)}
      </pre>

    </div>
  )
}
export default App