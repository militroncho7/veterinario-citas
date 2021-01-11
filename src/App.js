import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {

  //Array de Citas
  const [citas, guardarCitas] = useState([]);

  //Función que coge las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([ ...citas, cita]);
  };

  return (
    <Fragment>
      <h1>Administra tu Cita</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>

          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
