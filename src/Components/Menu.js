import blackForest from '../images/choco.png';
import fudgyChocolate from '../images/fudgy-chocolate.png';
import darkOrange from '../images/dark-orange.png';
import vanillaForest from '../images/vanilla.png';
import pineForest from '../images/pineapple-forest.png';
import mango from '../images/mango-forest.png';

import ratingStar from '../images/star.png';
import caloriesFire from '../images/fire.png';
import Navbar from './Navbar';

import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Menu = (props) => {

    const dispatch = useDispatch();
    
    const adder = (e)=>{
        const num = (e.target.id)
        const actionObject = {
            name:items[num].name,
            quantity:items[num].quantity,
            cost:items[num].cost,
        }
        dispatch(cartActions.addCard(actionObject));
    }
    const remover = (e)=>{
        const num = (e.target.id)
        dispatch(cartActions.removeCard(items[num]));
    }

    const items = [
        {
            image:blackForest,
            name:'Black Forest',
            rating:4.4,
            calories:'220-280 Kcal',
            cost:'5$',
            quantity:0
        },
        {
            image:fudgyChocolate,
            name:'Fudgy Chocolate',
            rating:4.5,
            calories:'220-270 Kcal',
            cost:'7$',
            quantity:0
        },
        {
            image:darkOrange,
            name:'Dark orange',
            rating:4.3,
            calories:'220-290 Kcal',
            cost:'7$',
            quantity:0
        },
        {
            image:vanillaForest,
            name:'Vanilla Forest',
            rating:4.4,
            calories:'220-290 Kcal',
            cost:'5$',
            quantity:0
        },
        {
            image:pineForest,
            name:'Pineapple Forest',
            rating:4.4,
            calories:'220-280 Kcal',
            cost:'7$',
            quantity:0
        },
        {
            image:mango,
            name:'Mango Blast',
            rating:4.5,
            calories:'220-260 Kcal',
            cost:'5$',
            quantity:0
        },   
    ]
    const newPastryList = items.map((item,i) => {
        return(
            <div className="card" key={i} >
                
                        <img src={item.image} alt="pastry"/>
                        <div className="card-text">
                            <h1>{item.name}</h1>

                            <div className="line-2">
                                <div className="rating">
                                    <img src={ratingStar} alt="rating"/>
                                    <span>{item.rating}</span>
                                </div>
                                <p>Pastrie</p>
                            </div>

                            <div className="line-3">
                                <div className="calories">
                                    <img src={caloriesFire} alt=""/>
                                    <span>{item.calories}</span>
                                </div>
                                <span className="veg">Veg</span>
                            </div>
                            
                            <div className="line-4">
                                <p>{item.cost}</p>
                                <div className="buttons">
                                    <button id={i} onClick={adder}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
        )
    }) 
    return ( 
        <div className="menu">
            <Navbar />
            <h1>MENU</h1>
            <div className="pastries">
                <h1>PASTRIES</h1>
                <div className="pastry-grid">
                   {newPastryList}
                </div>
            </div>
        </div>
     );
}
 
export default Menu;