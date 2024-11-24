import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const onAdd = (cantidad) => {
    cantidad > 0
      ? alert(`Se añadieron ${cantidad} productos`)
      : alert("No hay productos");
  };

  return (
    <Card style={{ width: "18rem", marginTop: 40, paddingBottom: "20px", paddingTop:'20px' }}>
      <Card.Img
        variant="top"
        src={product.img}
        style={{ width: "70%", height: "200px", margin: "0 auto", backgroundSize:'cover' }}
      />
      <Card.Body>
        <Card.Title> {product.name}</Card.Title>
        <Card.Text> ${product.price} </Card.Text>
        <Link to={`/item/${product.id}`} className="btn btn-primary">
          {" "}
          Ver
        </Link>
      </Card.Body>
      {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
    </Card>
  );
};

export default Item;
