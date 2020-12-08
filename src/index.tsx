import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import './firebase';
import AppProvider from './contexts/AppProvider';
=======
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
>>>>>>> 93ab0093fc3d708fd177a972b16b0db19471761c

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
