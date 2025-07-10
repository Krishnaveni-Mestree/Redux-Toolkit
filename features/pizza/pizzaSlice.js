const createSlice=require('@reduxjs/toolkit').createSlice;

const initialState={
    pizzaBase:1000
}

const pizzaSlice=createSlice({
    name:'pizza', //name of slice
    initialState, // equals to initialState:initialState
    reducers:{
        pizza_order:(state,action)=>{  //it is considerd as action creator
            state.pizzaBase--
        }    
    }
})
console.log(pizzaSlice);

module.exports=pizzaSlice.reducer;  //default export
module.exports.pizzaActions=pizzaSlice.actions;