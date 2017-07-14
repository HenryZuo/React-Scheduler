//React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import store from './reduxStore';
import { Provider } from 'react-redux';

// Components
import Selectable from './components/Selectable';

// Style
const style = {
  margin: '3em'
};

// Render
ReactDOM.render(
  <Provider store={store}>
    <div style={style}>
      <Selectable />
    </div>
  </Provider>,
  document.getElementById('root')
);
