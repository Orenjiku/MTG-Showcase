import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

const Card = ({ card, loading='eager' }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // let width = (window.innerWidth * 6/8) / 5
  // let height = `${width * 680/480}px`;
  // style={{'max-height': height}}

  return (
    <div className='cardContainer'>
      <img className='cardImage' loading={loading} alt={card.name} src={card.image_uris ? card.image_uris.border_crop : card.card_faces[0].image_uris.border_crop} onClick={handleOpen}/>
      <Modal className='modal' open={open} onClose={handleClose} aria-labelledby={card.name}>
        <div className='modalContainer' onClick={handleClose}>
          <div className='modalInnerContainer'>
            <div className='modalCardContainer'>
              <img className='card' alt={card.name} src={card.card_faces?.[0]?.image_uris ? card.card_faces[0].image_uris.large : card.image_uris.large} />
              <img className='card' src={card.card_faces?.[1]?.image_uris ? card.card_faces[1].image_uris.large : null} />
            </div>
            <div className='cardModalPrice'>
              <a className='cardPrice' href={card.purchase_uris?.tcgplayer} target='_blank'>
                {card.reprint ? 'Reprint | ' : 'New | '}
                {card.prices?.usd ? `Normal: $${card.prices.usd}` : card.prices?.usd_foil ? `Foil: $${card.prices.usd_foil}` : null}
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Card;