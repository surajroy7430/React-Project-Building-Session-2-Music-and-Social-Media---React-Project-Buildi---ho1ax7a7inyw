import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
<<<<<<< HEAD
import Podcasts from './Components/Podcasts/Podcasts';
=======
>>>>>>> 111007acd7961629143e9394f094e28ae33d4584

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/social" element={<Podcasts />} />
      </Routes>
    </>
=======
      <Main />
    </div>
>>>>>>> 111007acd7961629143e9394f094e28ae33d4584
  );
}

export default App;
