import React from 'react';
import Hoc from './Hoc';

const Appl = (props) => {
  return (
    <h1>
        Welcome User !! {props.name}
    </h1>
  )
}
//higher order component used for authentication logic
export default Hoc(Appl);
