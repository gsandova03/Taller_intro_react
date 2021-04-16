import React from 'react';

const producto = ({producto, carrito, agregarProducto, productos}) =>{

    const {nombre, precio, id} = producto;

    //Agregar productos
    const seleccionarProducto = id =>{
        console.log('Comprando con el id', id);
        const productoItem = productos.filter(producto => producto.id === id)[0];

        console.log('producto', productoItem);

        agregarProducto({
            ...carrito,
            productoItem
        })
    }

    //Eliminar producto
    const eliminarProducto = id =>{
        debugger;
        const productos = carrito.filter(producto => producto.id !== id);
        agregarProducto(productos)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <h2>{precio}</h2>

            {

            //Validacion de los productos
            productos
            ?
                <button type="buttom" onClick={() => seleccionarProducto(id)}>Comprar</button>
            :
                <button type="buttom" onClick={() => eliminarProducto(id)}>Eliminar</button>   
            }
        </div>

    );
}

export default producto;