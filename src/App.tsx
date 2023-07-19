import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import WomensProductList from './pages/WomensProductList';
import NavBar from './components/NavBar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Company from './pages/Company';
import Contact from './pages/Contact';
import MensProductList from './pages/MensProductList';


function App() {

  return (
      <Router>
        <ShoppingCartProvider>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/womens-wear" element={<WomensProductList/>}/>
          <Route path="/mens-wear" element={<MensProductList/>}/>
          <Route path="/about" element={<Company/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </ShoppingCartProvider>
      </Router>
    
  )
}

export default App
