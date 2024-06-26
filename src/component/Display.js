import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DisplayInput = () => {
  const input = useSelector((state) => state.autocomplete.input);
  const status = useSelector((state) => state.autocomplete.status);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
<div class="card text-center">
  <div class="card-header">
    <h2>Display</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">This is the location that you searched</h5>
    <p class="card-text text-success">{input}</p>
    <Link to={"/"} class="btn btn-primary">Go back</Link>
  </div>

</div>
  );
};

export default DisplayInput;