import React, { useState, useEffect } from 'react';
import CardColumn from './CardColumn.jsx';

const App = (props) => {
  return (
    <div className='cardColumnsContainer'>
      <CardColumn colors='White' setName='Double Masters' />
      <CardColumn colors='Blue' setName='Double Masters' />
      <CardColumn colors='Black' setName='Double Masters' />
      <CardColumn colors='Red' setName='Double Masters' />
      <CardColumn colors='Green' setName='Double Masters' />
    </div>
  )
}

export default App;