import React from "react";
import Item from './Item';
import ItemListContainer from "./ItemListContainer";

const itemList =({productos}) => {
    return (
        <>
        {productos.map((producto)=> 
            <Item key={producto.id} name={producto.name} description={producto.description} price={producto.price}/>
        )} </>
    )
}
export default itemList