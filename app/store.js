const configureStore=require('@reduxjs/toolkit').configureStore;
// const reduxLogger=require('redux-logger');

// const logger=reduxLogger.createLogger();
const pizzaReducer=require('../features/pizza/pizzaSlice');
const burgerReducer=require('../features/burger/burgerSlice');
const productReducer=require('../features/products/productSlice')


const store=configureStore({
    reducer:{
        pizza:pizzaReducer,
        burger:burgerReducer,
        product:productReducer
    },
    //middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)  


});

module.exports=store;