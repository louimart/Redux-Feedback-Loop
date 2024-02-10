import React from 'react';
import { useHistory } from 'react-router-dom';

function Success() {
  const history = useHistory();

  const handleClickNewFeedback = () => {
    // Navigate with React Router Dom
    history.push('/');
  };

  return (
    <>
      <h1>Thank you!</h1>
      <button
        className="btn-new-feedback"
        onClick={handleClickNewFeedback}
        data-testid="next"
      >
        Leave New Feedback
      </button>
    </>
  );
}

export default Success;
