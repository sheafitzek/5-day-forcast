import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';

import {injectGlobal} from 'styled-components';

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

injectGlobal`
	*, *:before, *:after {
		box-sizing: border-box;
	}

	html {
		display: flex;
		min-height: 100%;
	}

	body {
		display: flex;
		flex: 1;
		background: whitesmoke;
		background: url("http://wallpapercraft.net/wp-content/uploads/2016/07/Download-Free-Weather-Background.jpg");
		background-size: cover;
		background-repeat: no-repeat;
	}

	#root {
		display: flex;
		flex: 1;
	}
`;
