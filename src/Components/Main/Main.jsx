import React, { useEffect, useState } from 'react';
import SongsLists from '../Musics/SongsLists';
import './Main.css';
import CustomLoader from '../Loader/CustomLoader';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  if (isLoading) {
    return <CustomLoader />
  }
  
  return (
    <div className="hero">
      <SongsLists />
    </div>
  )
}

export default Main
