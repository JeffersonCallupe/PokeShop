
import Spinner from 'react-bootstrap/Spinner';

function SpinnerPage() {
  return (
    <div className='d-flex align-items-center justify-content-center hei'
         style={{ width: '100%', height: '90vh'}}
    >
        <Spinner animation="border" variant="dark" />
    </div>
    
  );
}

export default SpinnerPage;