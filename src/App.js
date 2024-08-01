import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState(['apple','banana','grapes','mango']);
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [buttonText, setButtonText] = useState ('Hide')
  function manipulate(){
    if(isLoggedIn === true)
    {
      setIsLoggedIn(false);
    setButtonText('Show');
    }
    else
    {
      setIsLoggedIn(true);
    setButtonText('Hide');
    }
  }
  return (
    <>
    {isLoggedIn ? 
    item.map((item) => 
    <ul>
    <li>{item}</li>
    </ul>
    ): <p></p> }
    <button onClick={manipulate}>{buttonText}</button>
    </>
  );
}

export default App;
