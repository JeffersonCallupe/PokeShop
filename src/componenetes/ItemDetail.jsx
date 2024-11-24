import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";

export default function ItemDetail({ producto }) {
  const onAdd = (cantidad) => {
    cantidad > 0
      ? alert(`Se añadieron ${cantidad} productos`)
      : alert("No hay productos");
  };

  return (
    <div className="container d-flex justify-content-evenly align-items-center">
      <Card style={{ width: "18rem", marginTop: 40, paddingBottom:'10px' }}>
        <Card.Img
          variant="top"
          src= {producto.img}
          style={{ width: "80%", height: "auto", margin: "0 auto" }} 
        />
        <div className="d-flex align-items-center flex-column">
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text className="text-center" >$ {producto.price}</Card.Text>
          </Card.Body>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </Card>

      
      <Card style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{producto.category}</Card.Subtitle>
        <Card.Text  className="lh-lg" > {producto.description} </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}
