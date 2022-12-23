import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/Counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispach = useDispatch()
  const counter = useSelector(state=>state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)


  const incrementHandler = ()=>{
    dispach(counterActions.incrementBy5(5))
  }
  const decrementHandler = ()=>{
    dispach(counterActions.decrementBy5(5))
  }
  const toggleCounterHandler = ()=>{
    dispach(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
     {show &&  <div>
        <button onClick={incrementHandler}>IncermentBy5</button>
        <button onClick={decrementHandler}>DecrementBy5</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
