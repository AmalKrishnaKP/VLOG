import React from 'react'
import { BrowserRouter ,Route,Routes,Link} from 'react-router-dom'
import Home from './components/Home'
import AddProduct from './components/AddProduct'
import Nav from './components/Nav'

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> }>Home</Route>
        <Route path='/addProduct' element={ <AddProduct/> } ></Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App