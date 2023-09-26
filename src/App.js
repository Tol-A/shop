import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { ShopContextProvider } from './components/context/ShopContext';
import { NavBar } from './components/component/navBar/NavBar';
import { Home } from './components/pages/home/Home';
import { About } from './components/pages/about/About';
import { Cart } from './components/pages/cart/Cart';
import { Error } from './components/pages/error/Error';
import { Footer } from './components/component/footer/Footer';


function App() {
  return (
    <div className="App">
     <ShopContextProvider>
        <Router>
            <NavBar/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/about' element = {<About/>}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error/>} />
              </Routes>
            <Footer/>
          </Router>
       </ShopContextProvider>
    </div>
  );
}

export default App;
