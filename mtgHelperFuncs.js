module.exports = {
  selectCardProperties: (card) => {
    return {
      name: card.name,
      id: card.id,
      imageUrl: card.imageUrl,
      number: card.number,
      supertypes: card.supertypes
    }
  },

  filterOutBorderlessCards: (card, rarityList) => {
    const previousCard = rarityList[rarityList.length - 1];
    if (previousCard !== undefined) {
      if (previousCard.name === card.name && Number(card.number) < Number(previousCard.number)) {
        rarityList[rarityList.length - 1] = module.exports.selectCardProperties(card);
      } else if (previousCard.name !== card.name) {
        rarityList.push(module.exports.selectCardProperties(card));
      }
    } else {
      rarityList.push(module.exports.selectCardProperties(card));
    }
  },

  sortByLegendary: (rarityList) => {
    rarityList.sort((a, b) => { return b.supertypes.length - a.supertypes.length; })
  }
}