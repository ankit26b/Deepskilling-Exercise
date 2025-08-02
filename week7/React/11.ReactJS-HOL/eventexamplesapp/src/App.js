import React, { useState } from 'react';
import CurrencyConverter from './components/CurrencyConverter';

function App() {

  const [count, setCount] = useState(0);

  function handleIncrement(){
    setCount(prev => prev+1);
    sayHello();
  }

  function handleDecrement() {
    setCount(prev => prev - 1);
  }

  function sayHello() {
    alert('Hello! Member.');
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleClick(e) {
    e.preventDefault();
    alert('I was clicked');
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>My React Counter & Events</h2>
      <p style={{ fontSize: '1.5em' }}>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
      <button onClick={handleClick}>Click on me</button>

      <hr />

      <CurrencyConverter/>
    </div>
  );
}

export default App;
