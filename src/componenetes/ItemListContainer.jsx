import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { getProducts } from "../mock/data";



const ItemListContainer = ( {greeting }) =>  { 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (false);
    
    // const onAdd = (cantidad ) =>{
    //         cantidad >0 ? alert( `Se añadieron ${cantidad} productos`) : alert ('No hay productos')
    // }


    useEffect ( () =>{
        setLoading (true)
        getProducts()
        .then( (res) =>  setProducts(res))
        .catch ((error) => console.log(error))
        .finally ( ()=> setLoading(false) )
    },[])

    return (
        <div>
            <h1>{greeting} </h1>
            
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} />  */}
            {  loading ? <p> Cargando ... </p> :  <ItemList  products={products}  />  }
              
        </div>
    )
}


export default ItemListContainer