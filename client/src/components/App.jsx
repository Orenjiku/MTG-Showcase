import React, { useState, useEffect } from 'react';
import CardColumn from './CardColumn.jsx';

const App = (props) => {
  return (
    <div className='cardColumnsContainer'>
      <CardColumn colors='white' setCode='khm' />
      {/* <CardColumn colors='blue' setCode='khm' /> */}
      {/* <CardColumn colors='black' setCode='khm' /> */}
      {/* <CardColumn colors='red' setCode='khm' /> */}
      {/* <CardColumn colors='green' setCode='khm' /> */}
    </div>
  )
}

export default App;