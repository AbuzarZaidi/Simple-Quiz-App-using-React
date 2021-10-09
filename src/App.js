import React,{useState} from 'react'
import './App.css'

function App() {
  const question=[
    {
      questionText:"Which type of JavaScript language is ___ ",
answerOption:[
  {answerText:"Object-Oriented",isCorrect:false},
  {answerText:"Assembly-language",isCorrect:false},
  {answerText:"Object-Based",isCorrect:true}, 
  {answerText:"High-level",isCorrect:false}]
    },
    {
      questionText:"Which one of the following also known as Conditional Expression: ",
answerOption:[
  {answerText:"Alternative to if-else",isCorrect:false},
  {answerText:"Switch statement",isCorrect:false},
  {answerText:"If-then-else statement",isCorrect:false}, 
  {answerText:"immediate if",isCorrect:true}]
    },
    {
      questionText:"The \"function\" and \" var\" are known as: ",
answerOption:[
  {answerText:"Keywords",isCorrect:false},
  {answerText:"Data types",isCorrect:false},
  {answerText:"Declaration statements",isCorrect:true}, 
  {answerText:"Prototypes",isCorrect:false}]
    },
    {
      questionText:"Which one of the following is the correct way for calling the JavaScript code?",
answerOption:[
  {answerText:"Preprocessor",isCorrect:false},
  {answerText:"Triggering Event",isCorrect:false},
  {answerText:"RMI",isCorrect:false}, 
  {answerText:"Function/Method",isCorrect:true}]
    },
    {
      questionText:"Which of the following type of a variable is volatile?",
answerOption:[
  {answerText:"Mutable variable",isCorrect:true},
  {answerText:"Dynamic variable",isCorrect:false},
  {answerText:"Volatile variable",isCorrect:false}, 
  {answerText:"Immutable variable",isCorrect:false}]
    },
  ]
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [correctAnswer,setCorrectAnswer]=useState(0);
  const [showResult,setShowResult]=useState(false);
  const nextQuestionHandler=(userAnswer)=>{
if(userAnswer){
  setCorrectAnswer(correctAnswer+1);
}
    if(currentQuestion<question.length-1){
      setCurrentQuestion(currentQuestion+1);
    }
    else{
      setShowResult(true);
    }
  }
  return (
<div className="container">
  {/* <h1>Simple Quiz app</h1> */}
  <div className="quizApp">
    {showResult===true?
    (
      <div className="score-section ">
        <h2>Result</h2>
        You got {correctAnswer} out of {question.length}</div>
    ):
    (<>
      <div className="question-section">
       <h2> Question No {currentQuestion+1}/{question.length}</h2>
       <h4>{question[currentQuestion].questionText}</h4>
      </div>
      <div className="answer-section">
        {question[currentQuestion].answerOption.map((answerOption)=>(
          <button onClick={()=>nextQuestionHandler(answerOption.isCorrect)}>{answerOption.answerText}</button>
        ))}
          
          
      </div>
    </>
    )}
  </div>
</div>
  );
}

export default App;
