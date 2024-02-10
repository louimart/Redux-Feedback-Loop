import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Support() {
  const history = useHistory();

  const handleClickToComments = () => {
    history.push('/comments');
  };

  return (
    <>
      <label for="support">
        <h1>How well are you being supported?</h1>
      </label>
      <input type="number" name="support" data-testid="input"/>
      <button onClick={handleClickToComments} data-testid="next">Next</button>
    </>
  );
}

export default Support;
