import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import {persistor, store} from './store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
