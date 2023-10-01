import './App.css';

// additional imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// file imports
import Navbar from './components/Navbar'
import Ryan from './pages/Ryan'
import Facts from './pages/Facts'
import Background from './pages/Background'
import Hello from './pages/Hello'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Facts />
      <Routes>
        <Route path='/' element={<Ryan />}/>
        <Route path='/facts' element={<Facts />}/>
        <Route path='/background' element={<Background />}/>
        <Route path='/hello' element={<Hello />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
