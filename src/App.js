import './App.css';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  return (
    <BrowserRouter>
      <div className='App'>
        <Route to='/Home' component={Home} />
        <Route to='/Menu' component={Menu} exact={true} />
        {isCartVisible && <Cart />}
      </div>
    </BrowserRouter>
  );
}

export default App;
