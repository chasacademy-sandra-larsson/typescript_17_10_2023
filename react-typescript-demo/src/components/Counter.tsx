import {  useState } from "react";

const Counter = () => {
const [count, setCount] = useState(0)
const [reset, setReset] = useState(count)


    return (
      <section>
        <h1>Number of days since...</h1>
        <p>{count}</p>
        <div>
          <button onClick={() => setCount(count => count - 1)}>➖ Decrement</button>
          <button onClick={() => setCount(0)}>🔁 Reset</button>
          <button onClick={() => setCount(count => count + 1)} >➕ Increment</button>
        </div>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault()
            setCount(reset)
            console.log(count)
            }}>
            <input 
                type="number"
                 value={reset}
                 onChange={(e) => setReset(e.target.valueAsNumber)}
                 />
            <button type="submit">Update Counter</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Counter;