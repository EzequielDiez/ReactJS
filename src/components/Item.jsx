import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';

const Item = (item) => {
  const onAdd = (cantidad) => {
    alert(`Has agregado ${cantidad} productos`);
  };

  return (
    <section className="sectionshop container-fluid text-center mt-4">
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4 w-75 text-center mx-auto" id="sectioncards">
            <div className="col-sm-12 col-md-4 col-lg-4 py-3">
                <div className="card border-0 h-100">
                    <img src={item.imagen} className="card-img-top" alt="{item.nombre}"/>
                    <div className="card-body">
                        <Link to ={`/detail/${item.id}`}>
                          <h4 className="card-title">{item.nombre}</h4>
                        </Link>
{/*                         <p className="card-text">{item.descripcion}</p> */}
                        <h5>${item.precio}</h5>
                        <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Item;