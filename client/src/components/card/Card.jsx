import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import CardSingle from './CardSingle.jsx';
import CardDouble from './CardDouble.jsx';

const Card = ({ card, loading='eager' }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='cardContainer'>
      <img className='card' loading={loading} alt={card.name} src={card.image_uris ? card.image_uris.border_crop : card.card_faces[0].image_uris.border_crop} onClick={handleOpen}/>
      <Modal className='modal' open={open} onClose={handleClose} aria-labelledby={card.name}>
        <div className='modalContainer' onClick={handleClose}>
          <div className='modalInnerContainer'>
            {card.layout === 'modal_dfc' || card.layout === 'transform' ? (
              <CardDouble card={card} />
            ) : (
              <CardSingle card={card} />
            )}
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