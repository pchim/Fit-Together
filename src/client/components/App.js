import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    {children}
    <Link to="/postdoc">Postdoc</Link>
    <Link to="/home">Home</Link>
    <Link to="/dash">Dashboard</Link>
  </div>
);


export default App;
