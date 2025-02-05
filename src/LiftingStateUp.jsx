import { useState } from "react";

export const LiftingStateUp = ()=>{
    const [InputValue, setInputValue] = useState("");
    return(
        <>
        <InputComponent InputValue = {InputValue} setInputValue={setInputValue}/>
        <DisplayComponent InputValue = {InputValue}/>
        </>
    );
}

const InputComponent = ({InputValue, setInputValue})=>{
    
   return <input type="text" placeholder="Enter Name" value={InputValue} onChange={(e)=> setInputValue(e.target.value)}></input>;
}

const DisplayComponent = ({InputValue}) => {
    return <p>The current input value is: {InputValue}</p>;
}