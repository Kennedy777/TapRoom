import React from 'react';
import { Link } from 'react-router-dom';

function EditKeg() {
  return (
    <div>
      <h1 className="subtitle">Edit Keg Info</h1>
      <Link to="/keglist">Confirm Edit</Link>
    </div>
  );
}

export default EditKeg;
