import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LayoutFull from './views/layout_full.js';
import registerServiceWorker from './registerServiceWorker';

class Matcha extends Component {
  render() {
    return (
      <LayoutFull />
    );
  }
}

ReactDOM.render(
  <Matcha />,
  document.getElementById('root')
);
registerServiceWorker();
