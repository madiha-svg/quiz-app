import React,{ useState, useContext } from "react";
import { Questions } from './QuestionBank';
import { GameStateContext } from './Contexts';



function Quiz() {
    const { score, setScore, gameState, setGameState } = useContext(GameStateContext);
    
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
   

    const chooseOption = (option) => {
        setOptionChosen(option);
    }

    

    const nextQuestion = (e) =>{
       if(Questions[currQuestion].answer === optionChosen) {
           setScore(score + 1);
           
       }

       setCurrQuestion(currQuestion + 1);
       
       if(optionChosen === '') {
         alert('please select one');
          }
       
       
    };

    const finishQuiz = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("EndScreen");
    };

    return ( <div className="quiz">
        <h2>{Questions[currQuestion].prompt}</h2>
        <div className="questions">
            <button onClick={() => {
                chooseOption("optionA");
            }}>{Questions[currQuestion].optionA}</button>

        <button onClick={() => {
            chooseOption("optionB");
        }}>{Questions[currQuestion].optionB}</button>

        <button onClick={() => {
            chooseOption("optionC");
        }}>{Questions[currQuestion].optionC}</button>

<button onClick={() => {
            chooseOption("optionD");
        }}>{Questions[currQuestion].optionD}</button>

        </div>

        {currQuestion === Questions.length-1 ? (
            <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
        <button onClick={nextQuestion}>Next Question</button>
        )}
   

    
    </div>
    );
}

export default Quiz;