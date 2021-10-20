import "./App.css";
import Wrapper from './components/Wrapper' // нужно создать
import Circle from './components/Circle' // нужно создать
import { useState } from "react";

export default function App() {
    const [bgColor, setBgColor] = useState(1);

    function handleChangeColor(value){
        setBgColor(value); 
        console.log("lol");
    }
    return (
        <Wrapper bg={bgColor}>
            {[1, 2, 3, 4, 5].map((num) => {
                return (
                    <Circle key={num} number={num} onTempChange={handleChangeColor}/>
                );
            })}
        </Wrapper>
    );
}