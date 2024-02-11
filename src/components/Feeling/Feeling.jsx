import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Feeling() {
  const history = useHistory();
  const dispatch = useDispatch();
  let feeling = useSelector((store) => store.feeling);
  const [inputFeeling, setInputFeeling] = useState('');

  const handleClickNextPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FEELING_LEVEL',
      payload: inputFeeling,
      });
    // Navigate with React Router Dom
    history.push('/understanding');
    // clear form fields
    // setInputFeeling('');
  };

  const handleChangeFeeling = (event) => {
    setInputFeeling(event.target.value);
  };

  return (
    <form>
      <label for="feeling">
        <h1>How are you feeling today?</h1>
      </label>
      <input
        type="number"
        name="feeling"
        value={inputFeeling}
        onChange={handleChangeFeeling}
        data-testid="input"
      />
      <button type="button" onClick={handleClickNextPage} data-testid="next">
        Next
      </button>
    </form>
  );
}

export default Feeling;
