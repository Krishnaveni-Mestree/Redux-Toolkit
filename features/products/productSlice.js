const createSlice=require('@reduxjs/toolkit').createSlice;
const createAsyncThunk=require('@reduxjs/toolkit').createAsyncThunk;
const axios=require('axios');

const initialState={
    loading:false,
    products:[],
    error:"",
}

//createAsyncThunk() will accept 2 params, action type and callback func
const fetchProducts=createAsyncThunk('product/fetchProducts',()=>{
    //here we r going to get our api url
    return axios.get('https://fakestoreapi.com/products')
        .then((res)=>res.data.map((prod)=>prod.title))
})

const productSlice=createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })
    }
});

module.exports=productSlice.reducer;
module.exports.fetchProducts=fetchProducts;