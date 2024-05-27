// Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from './redux/actions';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>Filter Tasks:</label>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
    </div>
  );
}

export default Filter;
