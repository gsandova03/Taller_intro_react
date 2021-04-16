import React, {fragment, useState} from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Contador from './components/Contador'
import ContadorHook from './components/ContadorHook'
import Producto from './components/producto'

function App() {
  
  const [productos, guardarProductos] = useState([
    {id:1, nombre:"Camisa Junior", precio:100},
    {id:2, nombre:"Camisa America", precio:200},
    {id:3, nombre:"Camisa Nacional", precio:300},
    {id:4, nombre:"Camisa Real Cartagena", precio:500},
  ]);
  //state para almacenar el valor del carrito de compra
  const [carrito, agregarProducto] = useState([]);

  return (
    <div className="App">
      <Header titulo='Tienda Hola mundo'/>
      <Contador />
      <ContadorHook />
      {productos.map(producto => (
        <Producto producto={producto} 
          key={producto.id}
          carrito={carrito}
          agregarProducto={agregarProducto}
          productos={productos}
          />
      ))}

      <Footer />
    </div>
  );
}

export default App;
