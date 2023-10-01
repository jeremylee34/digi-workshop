import { useState, React } from 'react';
import Button from '../components/Button';
import './Facts.css';

import { catFacts, catPics } from '../assets/cats'
import cat_clone from '../assets/cats/cat_clone.png'


const Facts = () => {
  const [catFact, setCatFact] = useState(null);

  const [catPic, setCatPic] = useState(null);
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
    <div className='fact-container'>
      <div class='img-container'>
        <img src={catPics[picNumber]} alt='cat pic'/>
      </div>
      <Button
        buttonLabel={buttonClicked ? 'Another!' : 'Press to get a cool cat fact!'}
        onClick={handleClick}
      />
      <h1 className='cat-fact'>{catFact}</h1>
    </div>
  )
}

export default Facts