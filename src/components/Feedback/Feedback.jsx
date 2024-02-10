import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Feedback() {
  const history = useHistory();

  const handleClickSubmit = () => {
    history.push('/success');
  };

  return (
    <>
      <h1>Review your feedback</h1>
      <button onClick={handleClickSubmit} data-testid="next">
        Submit
      </button>
    </>
  );
}

export default Feedback;
