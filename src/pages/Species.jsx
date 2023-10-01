import { useState, React } from 'react';

import dog from '../images/species/dog.jpg';
import fish from '../images/species/fish.jpg';
import dogfish from '../images/species/dogfish.jpg';
import xray from '../images/species/xray.jpg';
import mike from '../images/species/mike.jpg';

const Species = () => {
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
    }
    setResult(imageSrc);
  };

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      checkText();
    }
  };

  return (
    <div class='container'>
      <h1 class='header'>what species (only dog or fishes allowed btw)?</h1>
      <input
        type="text"
        placeholder="let's xray something..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={checkText}>Check</button>
      <div class='img-container'>
        <img src={result} alt="Result" />
      </div>
    </div>
  );
};


export default Species