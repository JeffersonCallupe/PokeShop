import React, { useEffect, useState } from 'react'
import { getProducts, oneGetProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import SpinnerPage from './Spinner'
import { useParams } from 'react-router-dom'


export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams();
    console.log(typeof id)

    // useEffect( () => {
    //     setLoading(true)
    //     getProducts()
    //     .then( (response) => setProducto(response.find( item => item.id === 5)))
    //     .catch ( (error) => console.log(error))
    //     .finally( () => setLoading(false))
    // },[])

    useEffect(()=>{
        setLoading(true)
        oneGetProduct(Number(id))
        .then((respose) => setProducto(respose))
        .catch( (error) => console.log(error) )
        .finally( () => setLoading(false))
    },[])


    return (
        <div>
            { loading ? <SpinnerPage/> : <ItemDetail  producto={producto} /> }
        </div>
  )
}
