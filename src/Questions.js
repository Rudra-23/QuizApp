import React from 'react'
import './Questions.css'


function Questions({ele,idx}) {
    var decodeHTML = function (html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };

    function checkans(e) {
        e.preventDefault();
        if(decodeHTML(e.target.innerHTML) === decodeHTML(ele.correct_answer)) {
            document.getElementById(e.target.id).style.backgroundColor = 'Green'
            document.getElementById(e.target.id).style.color = "white";
        }
        else {
          document.getElementById(e.target.id).style.backgroundColor = 'red';
          document.getElementById(e.target.id).style.color = "white";
        }
    }
    return (
      <div className="question-div">
        <h3>  {decodeHTML(ele.question)} </h3>
        <div className="options">
          <button className="btn" id={`${idx}1`} onClick={(e) => checkans(e)}>
            {decodeHTML(ele.options[0])}
          </button>

          <button className="btn" id={`${idx}2`} onClick={(e) => checkans(e)}>
            {decodeHTML(ele.options[1])}
          </button>

          <button className="btn" id={`${idx}3`} onClick={(e) => checkans(e)}>
            {decodeHTML(ele.options[2])}
          </button>

          <button className="btn" id={`${idx}4`} onClick={(e) => checkans(e)}>
            {decodeHTML(ele.options[3])}
          </button>
        </div>
        
      </div>
    );
}

export default Questions
