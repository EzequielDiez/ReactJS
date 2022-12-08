import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {

    return(
/*         <div style={{position: 'relative', display: 'inline-block',}}>
            <img src="./banner.jpg" alt="banner" style={{width: '100%' , height: 'auto'}}/>
            <h1 style={{position: 'absolute', top: '10%', left: '20%', color: 'black'}}>{greeting}</h1>
        </div> */
        <div>
            <h1 style={{textAlign: 'center', marginTop: 50}}>{greeting}</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer