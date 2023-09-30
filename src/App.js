import './App.css';

// additional imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename={config.BASE_NAME}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/ryan' element={<Ryan />}/>
        <Route path='/facts' element={<Facts />}/>
        <Route path='/background' element={<Background />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
