import React from 'react';
import { Link } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  //const params=useParams();
  let {search}=useLocation();
  let qparams=new URLSearchParams(search);
  console.log(search);
  return (
    <div>
      <h3>Welcome to Dashboard</h3>
      <center>
      <Link to='/about' className='btn btn-primary'>About</Link><br/>
      <p>Name:{qparams.get('name')} & Age:{qparams.get('age')}</p>
      <Link to='/'>Back to Home page</Link>
      </center>
    </div>
  )
}

export default Dashboard
