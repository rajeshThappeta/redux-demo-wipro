//create slice
import {createSlice} from '@reduxjs/toolkit';

export const counterSlice=createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{
        incrementCounter:(state,action)=>{
           state.counter=state.counter+1;
        },
        decrementCounter:(state,action)=>{
            state.counter=state.counter-1;
        },
        resetCounter:(state,action)=>{
            state.counter=0;
        },
        incrementByValue:(state,action)=>{
            state.counter=state.counter+action.payload;
        },
    }
})

//export reducer of counterSlice
export default counterSlice.reducer
//create action creatror functions
export const {incrementCounter,decrementCounter,resetCounter,incrementByValue}=counterSlice.actions
