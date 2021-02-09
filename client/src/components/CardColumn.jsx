import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardColumn = ({ color, set }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`/cards/${color}`)
      .then(({ data }) => {
        setCards(data);
        //filter by data.cards.colors.length === 1
      })
  }, []);

  // console.log(cards[0].imageUrl)
  return (
    // <div>hello</div>
    <div>
      {cards.map((card, i) => {
        return <div key={`white${i}`}>
          <img src={card.imageUrl} />
        </div>
      })}
    </div>
  )
}

export default CardColumn;