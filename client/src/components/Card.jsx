import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

const Card = ({ card }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <img className='cardImage' alt={card.name} src={card.image_uris ? card.image_uris.normal : card.card_faces[0].image_uris.normal} onClick={handleOpen}/>
      <Modal className='modal' open={open} onClose={handleClose} aria-labelledby={card.name}>
        <div className='cardModalContainer' onClick={handleClose}>
          <img alt={card.name} src={card.card_faces?.[0]?.image_uris ? card.card_faces[0].image_uris.large : card.image_uris.large} />
          <img src={card.card_faces?.[1]?.image_uris ? card.card_faces[1].image_uris.large : null} />
          <div className='cardModalPrice'>
            <a className='cardPrice' href={card.purchase_uris?.tcgplayer} target='_blank'>
              {card.prices?.usd ? `Normal: $${card.prices.usd}` : card.prices?.usd_foil ? `Foil: $${card.prices.usd_foil}` : null}
            </a>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Card;