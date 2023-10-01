import { useState, React } from 'react';
import Button from '../components/Button';
import './Facts.css';

const Facts = () => {
  const [catFact, setCatFact] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const catFacts = [
    "Cats have a strong territorial instinct and often mark their territory with scent markings.",
    "A group of cats is called a clowder.",
    "Cats have a specialized collarbone that allows them to always land on their feet when they fall.",
    "The world's oldest cat on record lived to be 38 years old.",
    "Cats have a unique grooming pattern and spend about 30-50% of their day grooming themselves.",
    "Cats can rotate their ears 180 degrees.",
    "A cat's nose print is unique, much like a human's fingerprint.",
    "Cats have whiskers on the backs of their front legs as well as on their faces.",
    "Cats have a strong preference for their left or right paw, just like humans are left- or right-handed.",
    "Cats can jump up to six times their body length in one leap.",
    "The average cat sleeps for about 12-16 hours a day.",
    "Cats have a vocal range of over 100 sounds.",
    "Cats have a keen sense of hearing and can hear ultrasonic sounds that are inaudible to humans.",
    "The world's fattest cat weighed over 46 pounds.",
    "Cats have been kept as pets for over 4,000 years.",
    "Cats have a specialized collarbone that allows them to always land on their feet when they fall.",
    "Cats can run at speeds of up to 30 miles per hour (48 kilometers per hour).",
    "The word 'cat' comes from the Old English word 'catt.'",
    "Cats have a third eyelid called the 'haw' that helps protect their eyes.",
    "Cats have a strong hunting instinct, and even well-fed domestic cats may 'hunt' toys or insects."
  ];
  
  function handleClick() {
    // Change button label when clicked
    if(!buttonClicked) setButtonClicked(true);
    
    // Get random fact 
    const randIndex = Math.floor(Math.random() * catFacts.length);
    setCatFact(catFacts[randIndex]);
  }

  return (
    <div className='fact-container'>
      <h1 className='fact-header'>Press to get a fun fact!</h1>
      <Button
        buttonLabel={buttonClicked ? 'Another!' : 'Get a cool cat fact!'}
        onClick={handleClick}
      />
      <h1 className='cat-fact'>{catFact}</h1>
    </div>
  )
}

export default Facts