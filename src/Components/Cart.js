import Navbar from './Navbar';

const Cart = (props) => {

    let tempArr = (props.data);
    let newArr = tempArr.map((item)=>{
        let newStr = parseInt(item.cost.slice(0,1));
        return(
            <tr className="listed-item">
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.cost}</td>
                <td>{item.count*newStr}</td>
            </tr>
        )
    })

    return ( 
    <div className="cart">
        <Navbar />
        <h1>YOUR CART</h1>
            <table>
                <tbody>
                <tr className="topics">
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Cost</th>
                </tr>
                {newArr}
                </tbody>
            </table>
    </div> );
}
 
export default Cart;