
import React, {useState} from "react"
import Button from 'react-bootstrap/Button';



const ItemCount = ({stock , initial, onAdd} ) => {

    const [ count, setCount ] = useState(initial);

    const sumar = () =>{
        count < stock ?  setCount (count + 1) : alert ( 'Fuera de stock')
    }

    const restar = () =>{
        count > 0 ? setCount (count - 1) : alert ( 'Error')
    }


    const addHandler = () =>{
        onAdd(count)
    }



    return ( 

        <div>
            <Button variant="outline-secondary"  onClick={restar} >-</Button>
             <span>  {count}  </span>
            <Button variant="outline-primary" onClick={sumar} >+</Button>
            
            <br />
            <br />
            <Button variant="outline-success" onClick={addHandler}  disabled={count === 0} >Agregar al carrito</Button>
            

        </div>
    )
}


export default ItemCount