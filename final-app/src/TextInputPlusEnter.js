import { useRef } from 'react';

function TextInputPlusEnter(){
  const inputRef = useRef();
  function onAddClicked(){
    const inputElement = inputRef.current;
    const inputValue = inputElement.value;
    console.log(inputValue);
  }
  return <div>
    <input ref={inputRef}/><button onClick={onAddClicked}>Add</button>
  </div>;
}

export default TextInputPlusEnter;
