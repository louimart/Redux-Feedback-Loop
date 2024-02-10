import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { getFeedback, postFeedback } from '../../feedbackApi/feedback.api';
import Feeling from '../feeling/feeling';
import Understanding from '../understanding/understanding';
import Support from '../support/support';
import Comments from '../comments/comments';
import Feedback from '../Feedback/Feedback';
import Success from '../Success/Success';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
        <Router>
          <Route path="/" exact>
            <Feeling />
          </Route>

          <Route path="/understanding" exact>
            <Understanding />
          </Route>

          <Route path="/support" exact>
            <Support />
          </Route>

          <Route path="/comments" exact>
            <Comments />
          </Route>

          <Route path="/feedback" exact>
            <Feedback />
          </Route>

          <Route path="/success" exact>
            <Success />
          </Route>
        </Router>
      </main>
    </div>
  );
}

export default App;
