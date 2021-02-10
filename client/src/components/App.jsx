import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SetSelector from './SetSelector.jsx';
import CardColumn from './CardColumn.jsx';

const App = (props) => {

  const [setList, setSetList] = useState([]);
  const [currentSet, setCurrentSet] = useState('khm');

  useEffect(() => {
    axios.get('/sets')
      .then(({ data }) => {
        setSetList(data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div>
      <SetSelector setList={setList} currentSet={currentSet} handleChangeSet={setCurrentSet} />
      <div className='cardColumnsContainer'>
        <CardColumn colors='white' setCode={currentSet} />
        <CardColumn colors='blue' setCode={currentSet}/>
        <CardColumn colors='black' setCode={currentSet} />
        <CardColumn colors='red' setCode={currentSet} />
        <CardColumn colors='green' setCode={currentSet} />
      </div>
    </div>
  )
}

export default App;