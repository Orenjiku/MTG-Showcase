import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import firstBy from 'thenby';
import Card from './Card.jsx';

const CardColumn = ({ colors, setName }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`/cards/${setName}/${colors}`)
      .then(({ data }) => {
        setCards(data)
      })
  }, []);

  console.log(cards)
  return (
    <div className='cardColumn'>
      {cards.map((card, i) => {
        return <Card card={card}/>
      })}
    </div>
  )
}

export default CardColumn;