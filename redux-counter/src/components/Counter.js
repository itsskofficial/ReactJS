import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/index'

const Counter = () => {
  const counter = useSelector(state=>state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    //dispatch({type:'toggle'})
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    //dispatch({ type: 'increase', amount: 5 })
    dispatch(counterActions.increase(5))
  }

  const decrementhandler = () => {
    //dispatch({ type: 'decrement' })
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import { Component } from 'react/cjs/react.production.min';
// class Counter extends Component{
//   incrementHandler() {
//     this.increment()
//   }

//   decrementHandler() {
//     this.decrement()
//   }

//   toggleCounterHandler() { }
  
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementhandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => { dispatch({ type: 'increment' }) },
//     decrement: () => { dispatch({ type: 'decrement' }) }
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)
