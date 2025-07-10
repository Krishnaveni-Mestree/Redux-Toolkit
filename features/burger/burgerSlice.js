const { pizzaActions } = require('../pizza/pizzaSlice');

const createSlice=require('@reduxjs/toolkit').createSlice;

const initialState={
    burgerBuns:200
};

const burgerSlice=createSlice({
    name:'burger',
    initialState,
    reducers:{
        burger_order:(state)=>{
            state.burgerBuns--
        }
    },
    //using this,i am just adding pizzaAction case where iam reducing the burger by one
    extraReducers:(builder)=>{
        builder.addCase(pizzaActions.pizza_order,(state,action)=>{
            state.burgerBuns--;
        })
    }
    //when i dispatch pizza, burger also reducing by 1
});

module.exports=burgerSlice.reducer;
module.exports.burgerActions=burgerSlice.actions;