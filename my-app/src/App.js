import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react';

const already_used = ['soney', 'qwerty'];
function App() {
  const usernameInput = useRef();
  const [isValid, setValid] = useState(false);
  const alreadyUsedElements = already_used.map((uname) => {
    return <li key={uname}>{uname}</li>
  });

  function checkAvailability(){
    const username = usernameInput.current.value;
    setValid((username.length >= 4) && (already_used.indexOf(username) < 0));
  }
  return (
    <div className="App">
      <label>Enter a username</label>
      <input ref={usernameInput} />
      <button onClick={checkAvailability}>Check Availability</button>
      <div>{isValid && "That username is available"}</div>
      <ul>{alreadyUsedElements}</ul>
    </div>
  );
}

export default App;
