import blackForest from '../images/choco.png';
import fudgyChocolate from '../images/fudgy-chocolate.png';
import darkOrange from '../images/dark-orange.png';
import vanillaForest from '../images/vanilla.png';
import pineForest from '../images/pineapple-forest.png';
import mango from '../images/mango-forest.png';

import ratingStar from '../images/star.png';
import caloriesFire from '../images/fire.png';
import {useState} from 'react';
import Navbar from './Navbar';

const Menu = (props) => {
    let Mobject = props.data;
    let setObject = props.dataFun;
    let [quantity,setQuantity] = useState([0,0,0,0,0,0]);

    const checkArr = (propName)=>{
        let x=0;
        let y=0; 
        if(Mobject.length===0){
            return null
        }
        else
        {
            let tempArr = [...Mobject];
           for(let i=0;i<tempArr.length;i++){

              if(tempArr[i].name===propName)
              {
                  x=1;
                  y=i;
                  break;
              }
           }
            if(x===1){
                return y;
            }
            if(x===0){
                return null;
            }
        }
    }

    const createObject = (pname,pcount,pcost,ff)=>{
        let val = checkArr(pname);

        if(val===null){
            let temparr=[...Mobject];
            let tempObject = {
                name:pname,
                count:pcount,
                cost:pcost
            }
            temparr=[...temparr,tempObject]
            setObject(Mobject=[...temparr]);
        }
        else{
            let tempArr = [...Mobject];
            if(ff===1){
            tempArr[val].count+=1;
            }
            if(ff===-1){
                tempArr[val].count-=1;
            }
            setObject(Mobject=[...tempArr]);
        }
        
    }

    const adder = (e)=>{
        let i = (e.target.parentNode.children[1].id);
        let temparr = [...quantity];
        temparr[i]=temparr[i]+1;
        setQuantity(quantity=[...temparr])
        let cardText =(e.target.parentNode.parentNode.parentNode);
        let tempName=(cardText.children[0].innerText);
        let cost = (cardText.children[3].children[0].innerText);
        createObject(tempName,temparr[i],cost,1);
    }
    const remover = (e)=>{
        let i = (e.target.parentNode.children[1].id);
        let temparr = [...quantity];
        if(temparr[i]>0){
        temparr[i]=temparr[i]-1;
        setQuantity(quantity=[...temparr])
        let cardText =(e.target.parentNode.parentNode.parentNode);
        let tempName=(cardText.children[0].innerText);
        let cost = (cardText.children[3].children[0].innerText);
        createObject(tempName,temparr[i],cost,-1);
        }
    }


    const images = [blackForest,fudgyChocolate,darkOrange,vanillaForest,pineForest,mango];
    const names = ['Black Forest' , 'Fudgy Chocolate','Dark orange','Vanilla Forest','Pineapple Forest','Mango Blast'];
    const rating = [4.4, 4.5, 4.3, 4.4, 4.4, 4.5];
    const calories = ['220-280 Kcal','220-270 Kcal','220-290 Kcal','220-290 Kcal','220-280 Kcal','220-260 Kcal'];
    const costs = ['5$','7$','7$','5$','7$','5$'];
    

    const pastryList = names.map((pasName,i)=>{
        return(
            <div className="card" key={i} >
                
                        <img src={images[i]} alt=""/>
                        <div className="card-text">
                            <h1>{pasName}</h1>

                            <div className="line-2">
                                <div className="rating">
                                    <img src={ratingStar} alt=""/>
                                    <span>{rating[i]}</span>
                                </div>
                                <p>Pastrie</p>
                            </div>

                            <div className="line-3">
                                <div className="calories">
                                    <img src={caloriesFire} alt=""/>
                                    <span>{calories[i]}</span>
                                </div>
                                <span className="veg">Veg</span>
                            </div>
                            
                            <div className="line-4">
                                <p>{costs[i]}</p>
                                <div className="buttons">
                                     <button onClick={remover}>-</button><span id={i}>{quantity[i]}</span><button onClick={adder}>+</button>
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
                   {pastryList}
                </div>
            </div>
        </div>
     );
}
 
export default Menu;