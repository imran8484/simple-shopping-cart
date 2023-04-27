
import { Alert, Button, Card } from "react-bootstrap"
import { CartState } from "../context/Context"
import {AiFillDelete} from 'react-icons/ai'
import '../App.css'
const Cart = () => {
  const {state:{cart},dispatch,}=CartState()

  return (
    <div className="p-4 d-flex cardmain">
        {
          cart.length>0? (
            <>
            {cart.map((prod)=>(
        <Card style={{ width: '19rem' }}  key={prod.id} className="d-flex m-4 c">
        <Card.Img variant="top" className="img" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>
          <span>Rs :-  {prod.price.split(".")[0]}</span>
          </Card.Text>
          
          </Card.Body>

          <Button variant="danger" className="m-4 "
           onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:prod})}
          
          >
          <AiFillDelete style={{cursor:"pointer",fontSize:"18px"}} />
          </Button>
          </Card>

        
        
      
    ))
    }
            </>

          ):
          (
            <Alert variant="warning" style={{width:"800px"}} >Cart is Empty!</Alert>

          )
        }
  </div>
  )
}

export default Cart