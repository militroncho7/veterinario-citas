import React, {Fragment, useState} from 'react';
import Logo from './components/Logo';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Array de Citas
  const [citas, guardarCitas] = useState([]);

  //Función que coge las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([ ...citas, cita]);
  };

  return (
    <Fragment>
      <Logo />
      <h3>Cuidamos de tus animales</h3>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>

          <div className="one-half column">
            <h2>Adminsitra tus Citas</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
