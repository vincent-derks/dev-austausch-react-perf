import React from 'react';
import { GlobalStyles } from './ui';
import List from './List';
import Context from './Context';

const App = () => (
  <>
    <GlobalStyles />
    <h2>React Perf</h2>
    <Context />
  </>
);

export default App;
