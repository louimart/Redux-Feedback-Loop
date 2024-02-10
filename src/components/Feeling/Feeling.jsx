import React from 'react';
import { useHistory } from 'react-router-dom';

function Feeling() {
  const history = useHistory();

  const handleClickToUnderstanding = () => {
    // Navigate with React Router Dom
    history.push('/understanding');
  };

  return (
    <>
      <label for="feeling">
        <h1>How are you feeling today?</h1>
      </label>
      <input type="number" name="feeling" data-testid="input"/>
      <button onClick={handleClickToUnderstanding} data-testid="next">Next</button>
    </>
  );
}

export default Feeling;
