import React from 'react';
import { Link } from 'react-router-dom';

const DesignList = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Email Templates</h1>

      <p>
        <Link to={`/dashboard/design/new`}>Template #47</Link>
      </p>
    </div>
  );
};

export default DesignList;
