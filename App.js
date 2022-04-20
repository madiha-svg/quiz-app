import React,{ useState, useContext } from "react";
import './App.css';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { GameStateContext } from "./Components/Contexts";


function App() {
   const [gameState, setGameState] = useState("MainMenu");
   const [score, setScore] = useState(0);

   return (
    <div className="App">
      <h1>Quiz App</h1>

    <GameStateContext.Provider value = {{ gameState, setGameState, score, setScore }}>
      {gameState === "MainMenu" && <MainMenu />}
      {gameState === "Quiz" && <Quiz />}
      {gameState === "EndScreen" && <EndScreen />}
    </GameStateContext.Provider>
    </div>
  );
  }

export default App;
