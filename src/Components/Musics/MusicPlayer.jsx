import { Avatar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useMusic } from '../../utils/MusicProvider';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ songs }) => {
  const { selectedMusic, selectMusic } = useMusic();
  const [currentIndex, setCurrentIndex] = useState(0);

  const findIndexById = (id) => {
    return songs.findIndex((song) => song._id === id);
  };
  useEffect(() => {
    // Reset the current index when a new music is selected
    setCurrentIndex(findIndexById(selectedMusic._id));
  }, [selectedMusic]);

  const { artist, audio_url, title, thumbnail } = selectedMusic;
  const artists = artist && artist.map((item) => item.name).join(", ");

  const changeSong = (direction) => {
    const totalSongs = songs.length;
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % totalSongs
        : (currentIndex - 1 + totalSongs) % totalSongs;

    setCurrentIndex(newIndex);
    selectMusic(songs[newIndex]);
  };

  const CustomControls = () => (
    <div className='musicDetails'>
      <div style={{display: 'flex'}}>
        <Avatar 
          sx={{ width: 56, height: 56 }} 
          variant="square" 
          src={thumbnail}
        />
        <div style={{marginLeft: '15px'}}>
          <Typography className="musicPlayerTitle">
            {title}
          </Typography>
          <Typography className="musicPlayerArtist">
            {artists}
          </Typography>
        </div>
      </div>
    </div>
  );

  if (!title) {
    return <></>; // Render nothing if no music is selected
  }

  return (
    <H5AudioPlayer 
      autoPlay={true}
      autoPlayAfterSrcChange={true}
      src={audio_url}
      volume={0.2}
      customAdditionalControls={[<CustomControls />]}
      showSkipControls={true}
      onClickPrevious={() => changeSong('previous')}
      onClickNext={() => changeSong('next')}
    />
  )
}

export default MusicPlayer
