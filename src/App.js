import React from 'react';
import ToDoComnponent from './components/ToDoComponent'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToDoComnponent />
      </Provider>
    </div>
  );
}

export default App;
