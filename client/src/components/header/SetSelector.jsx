import React from 'react';

const SetSelector = ({ setList, currentSet, handleChangeSet }) => {
  return (
    <select className='setSelector' value={currentSet} onChange={e => handleChangeSet(e.target.value)}>
      {setList.map(set => {
        return <option label={set.name} key={set.id} value={set.code} />;
      })}
    </select>
  );
};

export default SetSelector;