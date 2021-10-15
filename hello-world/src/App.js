import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">      
       <p>
          Hello World!!! {counter}
        </p>
        <button onClick = {() => setCounter(counter + 1)}> Click Me </button>
      </header>
     
    </div>
  );
}

export default App;
