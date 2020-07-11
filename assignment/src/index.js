import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
//import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer, 
  compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore})),
  //reactReduxFirebase(fbConfig),
  reduxFirestore(fbConfig)
  )
);

/*ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//serviceWorker.unregister();
//serviceWorker();
registerServiceWorker();*/


const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  attachAuthReady: true,
  userProfile: 'users', 
  useFirestoreForProfile: true
};

//store.firebaseAuthIsReady.then(() => {
ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
//})
