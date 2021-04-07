import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CurrentUserProvider from './contexts/contexts';
import Routes from './routes/routes';

const App=()=>{
  return (
    <CurrentUserProvider>
      <Router>
        <Routes/>
        <div>Привет</div>
      </Router>
    </CurrentUserProvider>
  );
};

export default App;