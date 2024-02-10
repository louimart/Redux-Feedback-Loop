import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Comments() {
  const history = useHistory();

  const handleClickToFeedback = () => {
    history.push('/feedback');
  }
  return (
    <>
      <label for="comments"><h1>Any comments you want to leave?</h1></label>
      <input type="text" name="comments" data-testid="input"/>
      <button onClick={handleClickToFeedback} data-testid="next">Next</button>
    </>
  );
}

export default Comments;
