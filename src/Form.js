import React,{useState} from 'react'
import Quizpage from './Quizpage';
import './Form.css'

function Form() {
    const [url, seturl] = useState(null)
    const [no, setno] = useState(10);
    const [category, setcategory] = useState(9)
    const [difficulty, setdifficulty] = useState('easy')
    function updateno(e) {
        setno(e.target.value)
    }
    function updatecategory(e) {
      setcategory(e.target.value);
    }
    function updatedifficulty(e) {
      setdifficulty(e.target.value);
    }
    function submittype(e) {
        if(url!=null) {
          window.location.reload(false);
        }
        e.preventDefault()
        seturl(`https://opentdb.com/api.php?amount=${no}&category=${category}&difficulty=${difficulty}&type=multiple`)
    }
    return (
      <div>
        <div className="quiz-type">
          <form>
            <div className="child">
              <label>
                <span> No of Questions</span>
                <input
                  type="number"
                  name="no"
                  onChange={updateno}
                  placeholder="10"
                />
              </label>
            </div>
            <div className="child">
              <span>Category</span>
              <select name="category" id="category" onChange={updatecategory}>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals and Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science and Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">
                  Entertainment: Japanese Anime & Manga
                </option>
                <option value="32">Entertainment: Cartoon & Animations</option>
              </select>
            </div>
            <div className="child">
              <span>Difficulty</span>
              <select
                name="difficulty"
                id="difficulty"
                onChange={updatedifficulty}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="child">
              <input
                className="submitbutton"
                type="button"
                onClick={(e) => submittype(e)}
                value="Submit"
              />
            </div>
          </form>
        </div>
        <div>{url? <Quizpage url={url} />   : ""}</div>
      </div>
    );
}

export default Form
