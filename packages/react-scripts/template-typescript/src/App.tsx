import React from 'react';
import Header from 'ui-toolkit/src/components/Header/Header';
import './_App.scss';

const noop = () => void 0;

const App: React.FC = () => {
  return (
    <div className="App">
      <Header onSignOutClick={noop}/>
    </div>
  );
};

export default App;
