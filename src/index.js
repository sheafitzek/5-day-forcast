import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import App from './components/App';

const composeEnhancers =
	typeof window !== `undefined` &&
	typeof window === `object` &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
			{
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
			}
		)
		: compose;

const store = createStore(
	reducers,
	/* preloadedState, */ composeEnhancers(
		applyMiddleware(ReduxPromise) /* , other store enhancers (if any), */
	)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById(`root`)
);

registerServiceWorker();
