import React, { useState, useEffect } from 'react';
import '../components/styles/ItemCount.css'

const ItemCount = ({ onAdd, inicial, stock }) => {
    //inicial = N° inicial del contador
    //stock = N° máximo del contador

    //hookstate
    const [cantidad, setCantidad] = useState(parseInt(inicial));

    //funcion para sumar o restar cantidad
    const addProduct = (num) => {
        setCantidad(cantidad + num);
    };

    useEffect(() => {
        setCantidad(parseInt(inicial));
    }, [inicial])

    return (
        <div className='contador'>
            <div>
                <button onClick={() => addProduct(-1)}
                    //Cada vez que se presiona el "-" se reduce la cantidad en 1, si la cantidad es = al "inicial" queda deshabilitado. 
                    disabled={cantidad === inicial}> - </button>
                <span style={{height: 100, padding: 50}}>{cantidad}</span>
                <button onClick={() => addProduct(+1)}
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