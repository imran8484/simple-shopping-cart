
import {Navbar,Container,Nav,Badge} from "react-bootstrap"
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from "../context/Context"
import {BsFacebook} from 'react-icons/bs'

import '../App.css'

const Header = () => {
  const {state:{cart}}=CartState();
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <Navbar.Brand >
          <Link to='/' className="logo font-bold">ShoppingX</Link>
        </Navbar.Brand>
        <Navbar.Brand >
          <Link to='/about' >About</Link>
        </Navbar.Brand>
        <Navbar.Brand >
        <Link to="https://www.facebook.com/profile.php?id=100012794388055&mibextid=ZbWKwL"><BsFacebook/></Link>
        </Navbar.Brand>
      
       <Nav>
     
      <Link variant="primary" to="/cart" className="mx-5 about"> 
      <sub><FaShoppingCart variant="white" fontSize={40} className="px-2 mx-0"/><sup style={{fontSize:"16px"}}> <Badge className="px-3 py-2 bg-warning text-dark "  >{cart.length}</Badge></sup></sub>
      
      </Link>
     

      

       </Nav>

      </Container>
        
      </Navbar>
    </>
  )
}

export default Header