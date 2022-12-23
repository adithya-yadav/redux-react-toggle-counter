import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispach = useDispatch()
  const counter = useSelector(state=>state.counter)
  const toggleCounterHandler = () => {};

  const incrementHandler = ()=>{
    dispach({type:'incrementBy5'})
  }
  const decrementHandler = ()=>{
    dispach({type:'decrementBy5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>IncermentBy5</button>
        <button onClick={decrementHandler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
