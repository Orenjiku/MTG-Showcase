import React from 'react';

const SetSelector = ({ setList, currentSet, handleChangeSet }) => {
  return (
    <select name='set' value={currentSet} onChange={e => handleChangeSet(e.target.value)}>
      {setList.map(set => {
        return <option key={set.id} value={set.code}>{set.name}</option>
      })}
    </select>
  )
}

export default SetSelector;