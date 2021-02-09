import React, { useState, useEffect } from 'react';
import CardColumn from './CardColumn.jsx';

const App = (props) => {
  // useEffect(() => {
  //   axios.get(')
  // });

  const [cardSet, setCardSet] = useState([]);

  return (
    <div>
      <CardColumn color='white' set='Kaldheim' />
    </div>
  )
}

export default App;