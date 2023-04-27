import { CartState } from "../context/Context"
import Product from "./Product";
// import Filters from "./Filters";

const Home = () => {
  const {state:{products},}=CartState();

  return (
    <div className="m">
    {/* <Filters/> */}
    <div className="cards">
    {
      products.map(p=> <Product prod={p} key={p.id} />)
    }
   
    </div>
    </div>
  )
}

export default Home