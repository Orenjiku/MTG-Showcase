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
      <h2 className='siteHeader'>Magic: The Gathering</h2>
      <div className='setSelectorContainer'>
        <label className='setSelectLabel'>Select Set:
          <SetSelector setList={setList} currentSet={currentSetCode} handleChangeSet={setCurrentSetCode} />
        </label>
      </div>
      <div className='cardColumnsContainer'>
        <CardColumn colors='white' setCode={currentSetCode} />
        <CardColumn colors='blue' setCode={currentSetCode}/>
        <CardColumn colors='black' setCode={currentSetCode} />
        <CardColumn colors='red' setCode={currentSetCode} />
        <CardColumn colors='green' setCode={currentSetCode} />
      </div>
      <CardBlock colors='Multicolor' setCode={currentSetCode} />
      <CardBlock colors='Colorless' setCode={currentSetCode} />
      <CardBlock type='Land' setCode={currentSetCode} />
      <CardBlock type='Basic Land' setCode={currentSetCode} />
    </div>
  )
}

export default App;