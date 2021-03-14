import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header/Header.jsx';
import CardColumn from './CardColumn.jsx';
import CardBlock from './CardBlock.jsx';
import ScrollButton from './ScrollButton.jsx';
import '../styles.css';

const App = (props) => {

  const [setList, setSetList] = useState([]);
  const [currentSetCode, setCurrentSetCode] = useState('khm');
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    axios.get('/sets')
      .then(({ data }) => {
        setSetList(data);
      })
      .catch(err => {
        console.log('Unable to get MTG sets');
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let height = document.getElementsByClassName('mainContainer')[0].getBoundingClientRect().height;
      if (height > window.innerHeight) {
        setShowScrollButton(true);
      } else if (height < window.innerHeight) {
        setShowScrollButton(false);
      }
    }, 500);
  }, [currentSetCode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='mainContainer'>
      <div className='gridContainer'>
        <div className='innerContainer'>
          <Header setList={setList} currentSetCode={currentSetCode} setCurrentSetCode={setCurrentSetCode} />
          <div className='cardColumnsContainer'>
            <CardColumn attribute='white' setCode={currentSetCode} />
            <CardColumn attribute='blue' setCode={currentSetCode} />
            <CardColumn attribute='black' setCode={currentSetCode} />
            <CardColumn attribute='red' setCode={currentSetCode} />
            <CardColumn attribute='green' setCode={currentSetCode} />
          </div>
          <CardBlock attribute='Multicolor' setCode={currentSetCode} />
          <CardBlock attribute='Colorless' setCode={currentSetCode} />
          <CardBlock attribute='Land' setCode={currentSetCode} />
          <CardBlock attribute='Basic Land' setCode={currentSetCode} />
          <CardBlock attribute='Borderless' setCode={currentSetCode} />
          <CardBlock attribute='ExtendedArt' setCode={currentSetCode} />
          <CardBlock attribute='Showcase' setCode={currentSetCode} />
          <ScrollButton scrollToTop={scrollToTop} showScrollButton={showScrollButton} />
        </div>
      </div>
    </div>
  );
};

export default App;