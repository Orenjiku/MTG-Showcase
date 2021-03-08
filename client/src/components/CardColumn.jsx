import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const CardColumn = ({ attribute, setCode }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`/cards/${setCode}/mono/${attribute}`)
      .then(({ data }) => {
        setCards(data)
      })
      .catch(err => {
        setCards([])
        console.log(`No ${attribute} cards found in this set.`);
      })
  }, [setCode]);

  return (
    <div>
      {cards.map((card, i) => {
        return <Card key={`${attribute}${i}${card.multiverse_ids[0]}`} card={card} />
      })}
    </div>
  )
}

export default CardColumn;