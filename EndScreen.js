import React,{ useState, useContext } from "react";
import { GameStateContext } from './Contexts';
import {Questions} from './QuestionBank'; 



function EndScreen() {

    const { score, setScore, setGameState } = useContext(GameStateContext);
    return<div className="EndScreen">
    <h1>Quiz finished</h1>
    <h3>{score}/{Questions.length}</h3>
    <h3></h3>
    
    </div>
};

export default EndScreen;