import React, { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [selectedMusic, setSelectedMusic] = useState({});

  const selectMusic = (music) => {
    setSelectedMusic(music);
  };

  return (
    <MusicContext.Provider value={{ selectedMusic, selectMusic }}>
      {children}
    </MusicContext.Provider>
  )
}

export const useMusic = () => {
  return useContext(MusicContext);
};
