import React, {Fragment, useState} from 'react';
import { v4 as uuid } from 'uuid'; //Libreria que crea ID unicos para formar elementos unicos
import PropTypes from "prop-types";

const Formulario = ({crearCita}) => {

    //Crear State de las citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    
    //State para validar el form
    const [error, actualizarError] = useState(false);

    //Función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })        
    };

    //Extraer los valores: Destructuring
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        //Validar
        //Para verificar espacios vacios -> .trim()
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
        hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        };

        //Eliminar el mesaje previo
        actualizarError(false);
        
        //Asiganr un ID
        cita.id = uuid();

        //Crear la cita
        //Necesitamos crear un State principal oirque vanis a tener en la app principal citas para poder
        //agregar las citas del form pero también listarlas en otro componente
        crearCita(cita)


        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    };

    return (        
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"   
                    onChange={actualizarState}
                    value={mascota}             
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}          
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}  
                    value={fecha}          
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    placeholder="Los síntomas de tu mascota..."
                    onChange={actualizarState}
                    value={sintomas} 
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
        
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;