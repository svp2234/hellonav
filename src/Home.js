import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const user="John";
  return (
    <div>
      <h3>Welcome to Home page</h3>
      <center>
        <Link to={`/dashboard?name=${user}&age=${20}`} className='btn btn-primary'>Dashboard</Link><br/><br/>
        <Link to='/about' className='btn btn-primary'>About</Link>
      </center>

    </div>
  )
}

export default Home
