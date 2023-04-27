
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart'
import Footer from './components/Footer'
import About from './components/About'
import ErrorPage from './components/ErrorPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App