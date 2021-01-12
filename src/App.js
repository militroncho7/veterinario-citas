import React, {Fragment, useState, useEffect} from 'react';
import Logo from './components/Logo';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en Local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  //Array de Citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

      if(citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas))
      } else {
        localStorage.setItem('citas',JSON.stringify([]));
      }
  }, [citas]); //dependencia del useEffect

  //Función que coge las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([ ...citas, cita]);
  };

  //Función que elimina una cita por su ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <Logo />
      <h3>Cuidamos de tus mascotas</h3>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
