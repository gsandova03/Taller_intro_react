import React from 'react';
//import './Header.css'

function Header({titulo}){
    
    const edad = 17;
    const nombre = 'Luis';

    let mensaje = '';

    if(edad >= 18){
        mensaje = "eres mayor de edad"
    }else{
        mensaje = "eres menor de edad"
    }
    
    return (
        <div className="header">
            {/*<h1 id="titulo">Bienvedido desde el Header</h1>
            <p>Hola {{nombre}}, tu edad es {{edad}}, entonces {{mensaje}}</p>*/}

            <h1>{titulo}</h1>       
        </div>
    )
}

export default Header;
