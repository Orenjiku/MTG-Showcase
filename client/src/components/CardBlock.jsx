import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

const CardBlock = ({ colors, setCode }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`/cards/${setCode}/${colors}`)
      .then(({ data }) => {
        setCards(data);
      })
      .catch(err => {
        setCards([]);
        console.log(`No ${colors} cards found in this set.`);
      })
  }, [setCode]);

  console.log(cards);

  return (
    <div>
      {cards.length === 0 ? null : <h3 className='sectionLabel'>{colors[0].toUpperCase().concat(colors.slice(1))}</h3>}
      <div className='cardBlockContainer'>
        <div className='cardRow'>
          {cards.map((card, i) => {
              return <Card key={`${colors}${i}${card.multiverse_ids[0]}`} card={card} />
          })}
        </div>
      </div>
    </div>
  )
};

export default CardBlock;