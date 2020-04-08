import React from 'react';

class Contactos extends React.Component {
    render() {
        var estudiantes = [
            {
                nombre: 'Manuel',
                apellido: 'Aguirre'
            },
            {
                nombre: 'Gerardo',
                apellido: 'Garcia'
            },
            {
                nombre: 'Jose',
                apellido: 'Izquiel'
            },
            {
                nombre: 'Juan',
                apellido: 'Perdomo'
            }
        ];

        return (

            <ul>
                {estudiantes.map((obj, ind) => {
                    return(
                        <li key={ind}> <input value={obj.nombre}/></li>
                    )
                })}
            </ul>

        );
    }
}

export default Contactos;