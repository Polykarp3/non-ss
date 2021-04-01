import React from 'react';
import CurrentUserProvider from './contexts/contexts';
import { BrowserRouter as Router } from 'react-router-dom';

const App=()=>{
  return (
    <CurrentUserProvider>
      <Router>
        <div>Привет</div>
      </Router>
    </CurrentUserProvider>
  );
};

export default App;