import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Comments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputComments, setInputComments] = useState('');

  const handleClickToFeedback = (event) => {
    event.preventDefault();
    dispatch({
      type: 'COMMENTS',
      payload: inputComments,
    })
    history.push('/feedback');
  };

  const handleChangeSupport = (event) => {
    setInputComments(event.target.value);
  };

  return (
    <>
      <label for="comments">
        <h1>Any comments you want to leave?</h1>
      </label>
      <input
        type="text"
        name="comments"
        value={inputComments}
        onChange={handleChangeSupport}
        data-testid="input"
      />
      <button onClick={handleClickToFeedback} data-testid="next">
        Next
      </button>
    </>
  );
}

export default Comments;
