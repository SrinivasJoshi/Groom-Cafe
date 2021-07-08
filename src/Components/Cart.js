import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Cart = (props) => {
  // dispatch
  const dispatch = useDispatch();
  const adder = (e) => {
    const itemName = e.target.parentElement.parentElement.children[0].innerText;
    dispatch(cartActions.addCard({ name: itemName }));
  };
  const remover = (e) => {
    const itemName = e.target.parentElement.parentElement.children[0].innerText;
    dispatch(cartActions.removeCard({ name: itemName }));
  };
  // select
  const cartItems = useSelector((state) => state.cart.cards);
  const finalCart = cartItems.map((obj, i) => {
    const temp = obj.cost;
    const price = temp * obj.quantity;
    return (
      <tr className='listed-item' key={i}>
        <td>{obj.name}</td>
        <td>
          <button onClick={remover} id={i}>
            -
          </button>
          {obj.quantity}
          <button onClick={adder} id={i}>
            +
          </button>
        </td>
        <td>{obj.cost}</td>
        <td>{price}$</td>
      </tr>
    );
  });

  return (
    <div className='cart'>
      <Navbar />
      <h1>YOUR CART</h1>
      <table>
        <tbody>
          <tr className='topics'>
            <th>Item</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Price</th>
          </tr>
          {finalCart}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
