import { BrowserRouter as Router, Route, Routes, NavLink, Navigate} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Products from './components/Products';


function App() {
  return (
    <Router>
      <div className='navbar'>
        <NavLink className='navlink' to='/'><p><i class="fa-solid fa-house"></i>Home</p></NavLink>
        <NavLink className='navlink' to='/products'><p><i class="fa-solid fa-fire"></i>Products</p></NavLink>
      </div>

    <Routes>
      <Route exact path='/products' element={
        <Products/>
      }/>
      <Route exact path = "/" element={
        <Home/>
      }/>
      <Route path="*" element={<Navigate to="/" replace={true} />}/>

    </Routes>

    </Router>
  );
}

export default App;
