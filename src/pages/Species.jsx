import { useState, React } from 'react';

const Species = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('xray.jpg');

  const checkText = () => {
    const lowercaseText = inputText.toLowerCase();
    let imageSrc = 'mystery_pokemon.jpg';

    if (lowercaseText.includes('dog') && lowercaseText.includes('fish')) {
      imageSrc = 'mixed_dog_fish.jpg';
    } else if (lowercaseText.includes('dog')) {
      imageSrc = 'dog.jpg';
    } else if (lowercaseText.includes('fish')) {
      imageSrc = 'fish.jpg';
    }
    setResult(imageSrc);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkText();
    }
  };

  return (
    <div>
      <h1>Text Analyzer</h1>
      <input
        type="text"
        placeholder="Enter text..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={checkText}>Check</button>
      <div>
        <img src={result} alt="Result" />
        <h1>{result}</h1>
      </div>
    </div>
  );
};


export default Species