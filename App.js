// App.js
import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import Filter from './Filter';

function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <AddTask />
      <Filter />
      <ListTask />
    </div>
  );
}

export default App;
