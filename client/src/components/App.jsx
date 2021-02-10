import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SetSelector from './SetSelector.jsx';
import CardColumn from './CardColumn.jsx';
import CardBlock from './CardBlock.jsx';

const App = (props) => {

  const [setList, setSetList] = useState([]);
  const [currentSetCode, setCurrentSetCode] = useState('khm');

  useEffect(() => {
    axios.get('/sets')
      .then(({ data }) => {
        setSetList(data);
      })
      .catch(err => {
        console.log('Unable to get MTG sets')
      })
  }, []);

  return (
    <div>
      <SetSelector setList={setList} currentSet={currentSetCode} handleChangeSet={setCurrentSetCode} />
      {/* <div className='cardColumnsContainer'>
        <CardColumn colors='white' setCode={currentSetCode} />
        <CardColumn colors='blue' setCode={currentSetCode}/>
        <CardColumn colors='black' setCode={currentSetCode} />
        <CardColumn colors='red' setCode={currentSetCode} />
        <CardColumn colors='green' setCode={currentSetCode} />
      </div> */}
      <div className='cardBlockContainer'>
        <CardBlock colors='multicolor' setCode={currentSetCode} />
      </div>
      {/* <div className='cardBlockContainer'>
        <CardBlock colors='colorless' setCode={currentSetCode} />
      </div>
      <div className='cardBlockContainer'>
        <CardBlock colors='land' setCode={currentSetCode} />
      </div> */}
    </div>
  )
}

export default App;