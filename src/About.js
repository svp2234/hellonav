import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h3>Welcome to About page</h3>
      <center>
      <Link to='/dashboard' className='btn btn-primary'>Dashboard</Link><br/>
      <Link to='/'>Back to Home page</Link>
      </center>
    </div>
  )
}

export default About
