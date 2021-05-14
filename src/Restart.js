import React from "react";
import './Restart.css';

function Restart() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button className='refreshbtn' onClick={refreshPage}>Start New Quiz!</button>
    </div>
  );
}

export default Restart;
