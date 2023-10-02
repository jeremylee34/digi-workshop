import { useState, React } from 'react';

import Button from '../components/Button';

import dog from '../images/xray/dog.jpg';
import fish from '../images/xray/fish.jpg';
import dogfish from '../images/xray/dogfish.jpg';
import xray from '../images/xray/xray.jpg';
import mike from '../images/xray/mike.jpg';
import empty from '../images/xray/empty.webp';

const Xray = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(xray);

  function checkText() {
    const lowercaseText = inputText.toLowerCase();
    let imageSrc = mike;

    if (lowercaseText.includes('dog') && lowercaseText.includes('fish')) {
      imageSrc = dogfish;
    } else if (lowercaseText.includes('dog')) {
      imageSrc = dog;
    } else if (lowercaseText.includes('fish')) {
      imageSrc = fish;
    } else if (lowercaseText.length === 0) {
      imageSrc = empty;
    }
    setResult(imageSrc);
  };

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      checkText();
    }
  };

  return (
    <div className='container'>
      <h1 className='header'>list your bag contents below. can only detect dog or fishes unfortunately</h1>
      <input
        type="text"
        placeholder="let's xray something..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={checkText}>Check</Button>
      <div class='img-container'>
        <img src={result} alt="Result" />
      </div>
    </div>
  );
};


export default Xray