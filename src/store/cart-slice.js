import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cards : [],
        totalQuantity:0
    },
    reducers : {
        addCard(state,action){
            const cardDetails = action.payload;
            const temp = state.cards.find(obj => obj.name === cardDetails.name);
            if(!temp){
                state.cards.push({
                    name:cardDetails.name,
                    cost : cardDetails.cost,
                    quantity : cardDetails.quantity+1,
                });
                state.totalQuantity++;
            }
            else{
                temp.quantity++;
                state.totalQuantity++;
            }
        },
        removeCard(state,action){
            const cardDetails = action.payload;
            const temp = state.cards.find(obj => obj.name === cardDetails.name);
            if(temp.quantity>1){
                temp.quantity--;
                state.totalQuantity--;
            }
            else{
                
                state.cards.pop(temp);
                state.totalQuantity--;
            }
        }
    }
});
export default cartSlice;
export const cartActions = cartSlice.actions;
