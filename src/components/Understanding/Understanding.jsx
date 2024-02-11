import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputUnderstanding, setInputUnderstanding] = useState('');

  const handleClickToSupport = () => {
    event.preventDefault();
    dispatch({
      type: 'UNDERSTANDING_LEVEL',
      payload: inputUnderstanding,
    });
    // Navigate with React Router Dom
    history.push('/support');
  };

  const handleChangeUnderstanding = (event) => {
    setInputUnderstanding(event.target.value);
  };

  return (
    <>
      <label for="understanding">
        <h1>How well are you understanding the content?</h1>
      </label>
      <input
        type="number"
        name="understanding"
        value={inputUnderstanding}
        onChange={handleChangeUnderstanding}
        data-testid="input"
      />
      <button onClick={handleClickToSupport} data-testid="next">
        Next
      </button>
    </>
  );
}

export default Understanding;
