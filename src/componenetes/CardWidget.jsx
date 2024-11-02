import { RiShoppingCartFill } from "react-icons/ri";
import { Badge } from "react-bootstrap";

const  CardWidget = () =>{
    return (

        <div>
            <RiShoppingCartFill fontSize={'1.8rem'} color="gray" />
            <Badge bg="secondary">10</Badge>
        </div>
    )


}


export default CardWidget;