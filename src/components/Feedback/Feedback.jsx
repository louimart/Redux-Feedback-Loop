import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Feedback() {
  const history = useHistory();
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);
  let feedback = { feeling, understanding, support, comments };

  // ***initially was passing a new local state feedback, but the above feedback obj works as well.
  // ***I was also passing default state as " " and changing to the redux variables allowed the values to be carried across.
  // let [feedback, setFeedback] = useState({
  //   feeling: feeling,
  //   understanding: understanding,
  //   support: support,
  //   comments: comments,
  // });

  const handleClickSubmit = (event) => {
    event.preventDefault();

    // ***creating a local state was redundant.
    // setFeedback({
    //   feeling: feeling,
    //   understanding: understanding,
    //   support: support,
    //   comments: comments,
    // });
    {
      console.log(feedback);
    }

    axios
      .post('/api/feedback', feedback)
      .then((response) => {})
      .catch((error) => {
        console.log('ERROR:', error);
      });

    // navigate to success page
    history.push('/success');
  };

  return (
    <>
      <h1>Review your feedback</h1>
      <ul className="feedback-list">
        <li>Feelings: {feeling}</li>
        <li>Understanding: {understanding}</li>
        <li>Support: {support}</li>
        <li>Comments: {comments}</li>
      </ul>
      <button onClick={handleClickSubmit} data-testid="next">
        Submit
      </button>
    </>
  );
}

export default Feedback;
