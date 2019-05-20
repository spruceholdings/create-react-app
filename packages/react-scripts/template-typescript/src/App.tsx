import * as React from 'react';
import Header from 'ui-toolkit/src/components/Header/Header';
import IconsSource from 'ui-toolkit/src/components/Icon/IconsSource';
import './_App.scss';

const noop = () => void 0;

const App: React.FC = () => {
  return (
    <div className="App">
      <IconsSource/>
      <Header onSignOutClick={noop}/>
    </div>
  );
};

export default App;
