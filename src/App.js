import './index.scss';
import {useState} from 'react';
function App() {
  
  let [count, setCount] = useState(0);

function increment() {
  setCount(count+1)
}

function decrement () {
 setCount(count-1)
}

function reset () {
  setCount(count=0)
}

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={decrement} className="minus">- Минус</button>
        <button onClick={increment} className="plus">Плюс +</button><br/><br/>
        <button onClick={reset} className="reset">Сбросить</button>
      </div>
    </div>
  );
}

export default App;
