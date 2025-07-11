const configureStore=require('@reduxjs/toolkit').configureStore;
const pizzaReducer=require('../features/pizza/pizzaSlice');
const burgerReducer=require('../features/burger/burgerSlice')

const store=configureStore({
    reducer:{
        pizza:pizzaReducer,
        burger:burgerReducer
    }
});

module.exports=store;