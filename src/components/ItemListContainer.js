const ItemListContainer = ({greeting}) => {

    return(
        <div style={{position: 'relative', display: 'inline-block',}}>
            <img src="./banner.jpg" alt="banner" style={{width: '100%' , height: 'auto'}}/>
            <h1 style={{position: 'absolute', top: '10%', left: '20%', color: 'black'}}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer