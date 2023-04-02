//import redux from 'redux'
import { configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter'
import authSlice from './auth'

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store

// const counterReducer = (state = {counter:0, showCounter:true},action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             counter:state.counter+action.amount
//         }
//     }
    
//     if (action.type === 'decrement') {
//         return {
//             counter:state.counter-1
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state
// }

// const store = redux.createStore(counterReducer)