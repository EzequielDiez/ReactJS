import React from "react";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import ItemList from "./ItemList";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([])

    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'productos')
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()})))) 
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()})))) 
        }
    }, [categoriaId])
    
    return(
        <div className="container justfy-content-center align-items-center text-center mt-5">
            <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                    <ItemList data={data}/>
            </div> 
        </div>
    )
}

export default ItemListContainer