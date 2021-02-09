import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import firstBy from 'thenby';
import Card from './Card.jsx';

const CardColumn = ({ colors, setName }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`/cards/${setName}/${colors}`)
      .then(({ data }) => {
        const mythic = [];
        const rare = [];
        const uncommon = [];
        const common = [];
        for (const card of data) {
          if (card.colorIdentity.length === 1 && card.colors[0] === colors && card.types[0] !== 'Land') {
            if (card.rarity === 'Mythic') {
              filterOutBorderlessCards(card, mythic)
            } else if (card.rarity === 'Rare') {
              filterOutBorderlessCards(card, rare)
            } else if (card.rarity === 'Uncommon') {
              uncommon.push(card);
            } else if (card.rarity === 'Common') {
              common.push(card);
            }
          }
        };
        //sort by legendary type
        sortByLegendary(mythic);
        // sortByLegendary(rare);
        // sortByLegendary(uncommon);
        setCards(mythic.concat(rare, uncommon, common));
      })
  }, []);

  const filterOutBorderlessCards = (card, rarityList) => {
    const previousCard = rarityList[rarityList.length - 1];
    // using optional chaining with ?. to handle edge case where object card is undefined
    if (previousCard?.name === card.name && Number(card.number) < Number(previousCard.number)) {
      rarityList[rarityList.length - 1] = card;
    } else if (previousCard?.name !== card.name) {
      rarityList.push(card);
    }
  };

  const sortByLegendary = (rarityList) => {
    rarityList.sort((a, b) => { return b.supertypes.length - a.supertypes.length; })
  }

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