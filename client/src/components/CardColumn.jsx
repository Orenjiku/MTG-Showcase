import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const CardColumn = ({ colors, setCode }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`/cards/${setCode}/${colors}`)
      .then(({ data }) => {
        setCards(data)
      })
  }, []);

  return (
    <div className='cardColumn'>
      {cards.map(card => {
        return <Card key={card.multiverse_ids[0]} card={card} />
      })}
    </div>
  )
}

export default CardColumn;