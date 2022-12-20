import React from "react";
import ItemList from "./ItemList";
import {useState, useEffect} from "react";
import { baseDatos  } from '../data/data.js';
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([])

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(baseDatos)
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(producto => producto.categoria === categoriaId)));    
        } else {
        getData.then(res => setData(res))
        }
    }, [categoriaId])
    
    return(
        <div>
            <h1 style={{textAlign: 'center', marginTop: 50}}>{greeting}</h1>
            <ItemList data={data}/> 
        </div>
    )
}

export default ItemListContainer