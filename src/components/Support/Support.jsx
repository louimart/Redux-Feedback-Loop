import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Support() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputSupport, setInputSupport] = useState('');

  const handleClickToComments = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SUPPORT_LEVEL',
      payload: inputSupport,
    }),
      history.push('/comments');
  };

  const handleChangeSupport = (event) => {
    setInputSupport(event.target.value);
  };

  return (
    <>
      <label for="support">
        <h1>How well are you being supported?</h1>
      </label>
      <input
        type="number"
        name="support"
        value={inputSupport}
        onChange={handleChangeSupport}
        data-testid="input"
      />
      <button onClick={handleClickToComments} data-testid="next">
        Next
      </button>
    </>
  );
}

export default Support;
