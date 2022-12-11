import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  
  return(
    <section className="sectionshop container-fluid text-center mt-4">
        <Link to={`/detalle/${info.id}`} className="row row-cols-1 row-cols-md-2 g-4 mt-4 w-75 text-center mx-auto" id="sectioncards">
            <div className="col-sm-12 col-md-4 col-lg-4 py-3">
                <div className="card border-0 h-100">
                    <img src={info.imagen} className="card-img-top" alt={info.nombre}/> 
                    <div className="card-body">
                          <h4 className="card-title">{info.nombre}</h4>
                        <h5>${info.precio}</h5>
                    </div>
                </div>
            </div>
        </Link>
    </section>
  )
}

export default Item;