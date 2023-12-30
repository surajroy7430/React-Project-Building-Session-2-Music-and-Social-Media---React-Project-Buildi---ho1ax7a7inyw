import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Podcasts from './Components/Podcasts/Podcasts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/social" element={<Podcasts />} />
      </Routes>
    </>
  );
}

export default App;
