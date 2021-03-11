import './App.css';
import Home from './Components/Home';
import About from './Components/About'; 
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';

import {useState} from 'react';

function App() {
  let [Mobject, setObject] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/about" component={About} />
          <Route path="/menu" render={(props) => (
          <Menu {...props} data={Mobject} dataFun={setObject}/>
          )} />
          <Route path="/cart" render={(props) => (
          <Cart {...props} data={Mobject} />
          )}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
