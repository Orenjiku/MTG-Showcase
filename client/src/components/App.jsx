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
      <div className='siteHeader'>Magic: The Gathering</div>
      <label className='setSelectorContainer'>
        <h3 className='setSelectLabel'>Select Set:</h3>
        <SetSelector setList={setList} currentSet={currentSetCode} handleChangeSet={setCurrentSetCode} />
      </label>
      <div className='cardColumnsContainer'>
        <CardColumn attribute='white' setCode={currentSetCode} />
        <CardColumn attribute='blue' setCode={currentSetCode} />
        <CardColumn attribute='black' setCode={currentSetCode} />
        <CardColumn attribute='red' setCode={currentSetCode} />
        <CardColumn attribute='green' setCode={currentSetCode} />
      </div>
      <CardBlock attribute='Multicolor' setCode={currentSetCode} />
      <CardBlock attribute='Colorless' setCode={currentSetCode} />
      <CardBlock attribute='Land' setCode={currentSetCode} />
      <CardBlock attribute='Basic Land' setCode={currentSetCode} />
      <CardBlock attribute='Borderless' setCode={currentSetCode} />
      <CardBlock attribute='Showcase' setCode={currentSetCode} />
    </div>
  )
}

export default App;