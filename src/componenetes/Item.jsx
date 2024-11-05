import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';



const Item = ({product} ) => {

    const onAdd  = ( cantidad) => {
        cantidad >0 ? alert( `Se añadieron ${cantidad} productos`) : alert ('No hay productos')

    }

    return (
        <Card style={{ width: '18rem' , marginTop : 40 }}>
            <Card.Img variant="top" src={product.img}  />
            <Card.Body>
                <Card.Title> { product.name }</Card.Title>
                <Card.Text> $ {product.price} </Card.Text>
                <Button variant="primary">Ver más</Button>
            </Card.Body>
            <ItemCount  stock={5} initial={1}  onAdd={onAdd}/> 
        </Card>
    )
}

export default Item
