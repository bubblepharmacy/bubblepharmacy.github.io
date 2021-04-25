import { useState } from 'react';

function ClickableButtonCounter(){
  const [numTimesClicked, setNumTimesClicked] = useState(0);
  function onButtonClick(){
    setNumTimesClicked(numTimesClicked + 1);
  }
  return <button onClick={onButtonClick}>Clicked {numTimesClicked} times</button>;
}

export default ClickableButtonCounter;
