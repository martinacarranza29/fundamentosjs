


function App() {

  const nombre = 'Martina' 

  const apellido = 'Carranza'

  let edad = 19

  console.log(edad) //modifico la edad

  edad = 20

  console.log(edad + 21) //le sume 21 a la edad 
  console.log('Hola ' + nombre + ' ' + apellido + ' ' + edad) 

  return (
    <>
      <h1>const - let - var</h1>
    </> 
  );
}

export default App;
