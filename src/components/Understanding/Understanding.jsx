import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Understanding() {
  const history = useHistory();

  const handleClickToSupport = () => {
    // Navigate with React Router Dom
    history.push('/support');
  };

  return (
    <>
      <label for="understanding">
        <h1>How well are you understanding the content?</h1>
      </label>
      <input type="number" name="understanding" data-testid="input"/>
      <button onClick={handleClickToSupport} data-testid="next">Next</button>
    </>
  );
}

export default Understanding;
