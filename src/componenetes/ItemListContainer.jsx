import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../mock/data";
import SpinnerPage from "./Spinner";
import { useParams } from "react-router-dom";


const ItemListContainer = ( {greeting }) =>  { 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (false);
    const {category} = useParams()

    // const onAdd = (cantidad ) =>{
    //         cantidad >0 ? alert( `Se añadieron ${cantidad} productos`) : alert ('No hay productos')
    // }


    useEffect ( () =>{
        setLoading (true)
        getProducts()
        .then( (res) => {
            if(category){
                setProducts(res.filter( (prod) => prod.category===category ))
            }else{
                setProducts(res)
            }
        })
        .catch ((error) => console.log(error))
        .finally ( ()=> setLoading(false) )
    },[category])

    return (
        <div>
            <h1>{greeting} </h1>
            
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} />  */}
            {  loading ? <SpinnerPage/> :  <ItemList  products={products}  />  }
              
        </div>
    )
}


export default ItemListContainer