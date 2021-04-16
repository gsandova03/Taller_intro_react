import React from 'react';

const Footer = () =>{
    const fecha = new Date().getFullYear()
    return (
        <footer>
            <p>Derechos reservados &copy; {fecha} </p>
        </footer>
    );
}

export default Footer;