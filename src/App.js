import './App.css';

// additional imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// file imports
import Navbar from './components/Navbar'
import Ryan from './pages/Ryan'
import Facts from './pages/Facts'
import Xray from './pages/Xray'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Ryan />}/>
        <Route path='/facts' element={<Facts />}/>
        <Route path='/xray' element={<Xray />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
