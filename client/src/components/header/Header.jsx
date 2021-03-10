import React from 'react';
import SetSelector from './SetSelector.jsx';

const Header = ({ setList, currentSetCode, setCurrentSetCode }) => {
  return (
    <div className='header'>
      <div className='title'>Magic: The Gathering</div>
      <label className='setSelectorContainer'>
        <h3 className='setSelectLabel'>Select Set:</h3>
        <SetSelector setList={setList} currentSet={currentSetCode} handleChangeSet={setCurrentSetCode} />
      </label>
    </div>
  );
};

export default Header;