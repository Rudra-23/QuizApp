import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";


function Quizpage({url}) {
  const [quiz, setQuiz] = useState(null);
  
  async function extractquestions() {
    const response = await fetch(
      url
    );
    const data = await response.json();
    setQuiz(data);
  }

  

  useEffect(() => {
    extractquestions();
  }, []);


  return (
    
    <div>
       {quiz!=null ? <Quiz questions = {quiz.results}  /> : <h1 style={{display:'flex' ,justifyContent:'center'}}>Loading...</h1> }
     </div>
  );
}

export default Quizpage;
