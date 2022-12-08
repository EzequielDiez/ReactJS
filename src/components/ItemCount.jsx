import React from 'react';
import { useState } from 'react';

const ItemCount = ({ onAdd, inicial, stock }) => {
    //inicial = N° inicial del contador
    //stock = N° máximo del contador

    //hookstate
    const [cantidad, setCantidad] = useState(inicial);

    //funcion para sumar o restar cantidad
    const addProduct = (num) => {
        setCantidad(cantidad + num);
    };

    return (
        <div className="count-container">
        <div className="count-container-contador">
            <button className="count-container-button" 
                onClick={() => addProduct(-1)}
                //Cada vez que se presiona el "-" se reduce la cantidad en 1, si la cantidad es = al "inicial" queda deshabilitado. 
                disabled={cantidad === inicial}> - </button>
            <span style={{height: 100, paddingTop: 50}} className="count-container-cantidad">{cantidad}</span>
            <button className="count-container-button"
                onClick={() => addProduct(+1)}
                //Cada vez que se presiona el "+" se aumenta la cantidad en 1, si la cantidad es = al "stock" queda deshabilitado. 
                disabled={cantidad === stock}> + </button>
        </div>

        <button className="btn btn-sm btn-secondary button-card" 
            onClick={() => {onAdd(cantidad);}}
            disabled={stock === 0 ? true : null}> Añadir </button>
        </div>
    );
};

export default ItemCount;