import React from 'react';
import * as store from './store'
import {useStore} from './useStore';

function App() {
  const {
    state,
    mutations
  } = useStore(store)
  return (
    <div className="App" style={{margin: "10px"}}>
      <input value={state.count} />
      <button onClick={mutations.add}>+</button>
    </div>
  );
}

export default App;
