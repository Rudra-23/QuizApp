import React from "react";
import Questions from './Questions'
import './Quiz.css'
import Restart from './Restart'

function Quiz({questions }) {
  let ques =[];
  questions.forEach(question => {
    ques.push({
      question: question.question,
      options: [question.correct_answer,question.incorrect_answers[0],question.incorrect_answers[1],question.incorrect_answers[2]].sort(),
      correct_answer: question.correct_answer,
      category : question.category
    });
  });


  let val =0
  return (
    <div className="list">
      <h1>{ques[0].category}</h1>
      <br></br>
      <div>
        {ques.map((ele) => (
          <Questions ele={ele} idx={val++} />
        ))}
      </div>
      <Restart />
    </div>
  );
}

export default Quiz;
