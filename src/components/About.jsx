import { Card } from "react-bootstrap"

import '../App.css'
import { Link } from "react-router-dom"
const About = () => {
  return (
    <div className="aboutMain">

    <Card  className="mainCard">
    
        <Card.Body>
        <Card.Title><h1>Muhammad Imran</h1></Card.Title>
            <Card.Text>
               kpk, district Buner pakistan
            </Card.Text>
            <Card.Title>Frontend Developer</Card.Title>
            <Card.Text>
                <p> a reactjs developer with a soft and technical skills and good communication skills </p>
            </Card.Text>
            <Card.Title>Skills</Card.Title>
            <Card.Text>
               <ul className="ul">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>sass and tailwindCss</li>
                <li>bootstrap and react-bootstrap</li>
                <li>Core js and ES6 </li>
                <li>reactjs and nextjs</li>
                <li>basics Nodejs --npm yarn </li>
                <li>git and github</li>
               </ul>
            </Card.Text>
        </Card.Body>
    </Card>
    {/* cart two */}

    
    <Card  className="mainCard">
    
        <Card.Body>
        <Card.Title><h1>Side Projects</h1></Card.Title>
            
            
            <Card.Text>
               <Link className="p" to="https://imranportfolioo.netlify.app/" >
                <h1>My Portfolio let go checkout</h1>
               </Link> 
            </Card.Text>
            <Card.Title>Used technologies</Card.Title>
            <Card.Text>
               <ul className="ul">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>tailwindCss</li>
                {/* <li>bootstrap and react-bootstrap</li> */}
                <li>Core js and ES6 </li>
                <li>reactjs</li>
                <li>basics Nodejs --npm yarn </li>
                <li>git and github</li>
               </ul>
            </Card.Text>
        </Card.Body>
    </Card>
{/* car 3 */}


<Card  className="mainCard">
    
    <Card.Body>
    <Card.Title><h1>Side Projects</h1></Card.Title>
        
        
        <Card.Text>
           <Link className="p" to="https://643c2a62dbdcc462d2059cc7--friendly-gecko-429328.netlify.app/" >

            <h1>My Form Validation let go checkout</h1>
           </Link> 
        </Card.Text>
        <Card.Title>Used technologies</Card.Title>
        <Card.Text>
           <ul className="ul">
            <li>reactjs jsx</li>
            <li>Formik and Yup</li>
            <li>Css3</li>
            <li>git and github</li>
           </ul>
        </Card.Text>
    </Card.Body>
</Card>


        
    </div>
  )
}

export default About