import React from 'react';
import ReactDOM from 'react-dom';
import whyDidYouRender from '@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min';

import App from './App';

whyDidYouRender(React);

ReactDOM.render(<App />, document.getElementById('root'));
