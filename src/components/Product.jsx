import {Card,Button } from "react-bootstrap"
// import Rating from "./Rating"

import { CartState } from "../context/Context"
const Product = ({prod})=> {

    const {state:{cart},dispatch}=CartState()
    console.log(cart)
  return (
    <>
          
      <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
        <span>Rs :-  {prod.price.split(".")[0]}</span>
        </Card.Text>
        
        <Card.Text>
       
        {
            cart.some((p)=>p.id===prod.id)?(
                <Button variant="danger"  width={60}  onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}} >remove from cart</Button>
            ):(
                <Button  disabled={!prod.inStock} width={60} variant="success" onClick={()=>dispatch({type:"ADD_TO_CART",payload:prod})}>{!prod.inStock ? "out of stock":"add to Cart"}</Button>

            )
        }
        </Card.Text>
        
       
      </Card.Body>
    </Card>
    </>
  )
}

export default Product