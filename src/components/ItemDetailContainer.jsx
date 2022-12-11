import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { baseDatos } from '../data/data';

const ItemDetailContainer = () => {
  
  const [data, setData] = useState({});
  const {detalleId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(baseDatos)
        }, 2000);
    });
    getData.then(res => setData(res.find(producto => producto.id === parseInt(detalleId))));
}, [])


  return(
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;