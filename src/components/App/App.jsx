import React from 'react';
import axios from 'axios';
import './App.css';

import { getFeedback, postFeedback } from '../../feedbackApi/feedback.api';
import Feeling from '../feeling/feeling';
import Understanding from '../understanding/understanding';
import Support from '../support/support';
import Comments from '../comments/comments';
import Feedback from '../Feedback/Feedback';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
        <Feeling />
        <Understanding />
        <Support />
        <Comments />
        <Feedback />
      </main>
    </div>
  );
}

export default App;
