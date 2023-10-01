import './App.css';

// additional imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// file imports
import Navbar from './components/Navbar'
import Ryan from './pages/Ryan'
import Facts from './pages/Facts'
import Species from './pages/Species'
import Hello from './pages/Hello'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Ryan />}/>
        <Route path='/facts' element={<Facts />}/>
        <Route path='/species' element={<Species />}/>
        <Route path='/hello' element={<Hello />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
