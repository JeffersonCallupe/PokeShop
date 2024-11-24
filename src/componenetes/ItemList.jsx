
import Item from "./Item"

const ItemList = ( {products} ) =>{

    return ( 
        <div className="d-flex align-items-center flex-wrap justify-content-around w-75 my-0 mx-auto "  >
            { products.map( (product) => <Item key={product.id}  product={product} /> ) }
        </div>
    )
}


export default ItemList