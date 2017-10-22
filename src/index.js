import './styles/app.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
