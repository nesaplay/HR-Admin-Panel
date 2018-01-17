import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import reducers from './reducers';
import rootSaga from './sagas/index';
import App from './routes/App';

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

sagaMiddleware.run(rootSaga);

render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
