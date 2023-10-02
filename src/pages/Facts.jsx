import { useState, React } from 'react';
import Button from '../components/Button';
import './Facts.css';

import { catFacts, catPics } from '../assets/cats'

const Facts = () => {
  const [catFact, setCatFact] = useState(null);
  const [picNumber, setPicNumber] = useState(0);

  const [buttonClicked, setButtonClicked] = useState(false);
  
  function handleClick() {
    // Change button label when clicked
    if(!buttonClicked) setButtonClicked(true);
    
    // Get random fact 
    const randIndex = Math.floor(Math.random() * catFacts.length);
    setCatFact(catFacts[randIndex]);
    if (picNumber < 19) {
      setPicNumber(prev => prev + 1)
    } else {
      setPicNumber(0)
    }
  }

  return (
    <div className='container'>
      <div className='img-container'>
        <img src={catPics[picNumber]} alt='cat pic'/>
      </div>
      <Button
        onClick={handleClick}
      >
        {buttonClicked ? 'Another one 🗿' : 'Press to get a cool cat fact!'}
      </Button>
      <h1 className='cat-fact'>{catFact}</h1>
    </div>
  )
}

export default Facts