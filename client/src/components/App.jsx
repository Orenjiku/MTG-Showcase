import React, { useState, useEffect } from 'react';
import CardColumn from './CardColumn.jsx';

const App = (props) => {
  return (
    <div className='cardColumnsContainer'>
      <CardColumn colors='white' setCode='2XM' />
      <CardColumn colors='blue' setCode='2XM' />
      <CardColumn colors='black' setCode='2XM' />
      <CardColumn colors='red' setCode='2XM' />
      <CardColumn colors='green' setCode='2XM' />
    </div>
  )
}

export default App;