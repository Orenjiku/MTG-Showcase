import React from 'react';

const CardPrice = ({ card }) => {
  return (
    <div className='cardModalPrice'>
      <a className='cardPrice' href={card.purchase_uris?.tcgplayer} target='_blank'>
        {card.reprint ? 'Reprint | ' : 'New | '}
        {card.prices?.usd ? `Normal: $${card.prices.usd}` : card.prices?.usd_foil ? `Foil: $${card.prices.usd_foil}` : null}
      </a>
    </div>
  )
}

export default CardPrice;