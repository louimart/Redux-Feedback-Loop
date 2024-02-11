import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

function Feedback() {
  const history = useHistory();
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);

  const handleClickSubmit = () => {
    history.push('/success');
  };

  return (
    <>
      <h1>Review your feedback</h1>
      <ul className='feedback-list'>
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
