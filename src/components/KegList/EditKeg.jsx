import React from 'react';
import { Link } from 'react-router-dom';

function EditKeg() {
  return (
    <div>
      <h1 className="subtitle">Edit Keg Form</h1>
      <Link to="/keglist">Submit</Link>
    </div>
  );
}

export default EditKeg;
