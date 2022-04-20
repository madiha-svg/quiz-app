import React,{ createContext, useContext, useState } from "react";
import { GameStateContext } from './Contexts';

 function MainMenu() {
const { gameState, setGameState } = useContext(GameStateContext);
  
   return(
        <div className="div1">
 
<button onClick={() => {
    setGameState("Quiz");
}}> Start Quiz</button>

   
 
    </div>
    
   );
}

export default MainMenu;
