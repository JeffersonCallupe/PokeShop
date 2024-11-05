import Button from 'react-bootstrap/Button';

function Buttom( {variant, contenido}) {
  return (
    <>
      <Button variant={variant}>{contenido}</Button>
    </>
  );
}

export default Buttom;