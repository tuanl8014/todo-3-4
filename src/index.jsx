import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {TodoAppContainer} from './components/TodoApp';
import 'todomvc-app-css/index.css';

// instantiate a new Redux store
const store = createStore(reducer);
// dispatch the SET_STATE action holding the desired state
store.dispatch({
  type: 'SET_STATE',
  state: {
    todos: [
      {id: 1, text: 'Nguyễn', status: 'active', editing: false},
      {id: 2, text: 'Hữu', status: 'active', editing: false},
      {id: 3, text: 'Hoàng', status: 'active', editing: false},
      {id: 4, text: 'Sơn', status: 'active', editing: false},
    ],
    filter: 'all'
  }
});

ReactDOM.render(
  // pass the store down to the components
  // Container components are about how things work (data fetching, state updates)
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('app')
);
