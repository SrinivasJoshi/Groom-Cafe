import ratingStar from '../images/star.png';
import caloriesFire from '../images/fire.png';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Menu = (props) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState();

  const adder = (e) => {
    const num = e.target.id;
    const actionObject = {
      name: items[num].name,
      quantity: items[num].quantity,
      cost: items[num].cost,
    };
    dispatch(cartActions.addCard(actionObject));
  };
  const getPro = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setItems(data);
  };
  useEffect(() => {
    console.log('here');
    getPro();
  }, []);

  return (
    <div className='menu'>
      <Navbar />
      <h1>MENU</h1>
      <div className='pastries'>
        <h1>PASTRIES</h1>
        <div className='pastry-grid'>
          {!items
            ? 'Loading'
            : items.map((item, i) => {
                return (
                  <div className='card' key={i}>
                    <img src={item.image} alt='pastry' />
                    <div className='card-text'>
                      <h1>{item.name}</h1>

                      <div className='line-2'>
                        <div className='rating'>
                          <img src={ratingStar} alt='rating' />
                          <span>{item.rating}</span>
                        </div>
                        <p>Pastrie</p>
                      </div>

                      <div className='line-3'>
                        <div className='calories'>
                          <img src={caloriesFire} alt='' />
                          <span>{item.calories}</span>
                        </div>
                        <span className='veg'>Veg</span>
                      </div>

                      <div className='line-4'>
                        <p>{item.cost}$</p>
                        <div className='buttons'>
                          <button id={i} onClick={adder}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
