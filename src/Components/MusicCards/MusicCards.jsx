import React, { useState } from 'react';
import './MusicCards.css';
import { useMusic } from '../../utils/MusicProvider';
import { Add, Menu, PlayCircle } from '@mui/icons-material';

const MusicCards = (props) => {
  const { selectedMusic, selectMusic } = useMusic();
  const { _id, artist, audio_url, title, thumbnail } = props;
  const artistsList = artist.map((item) => item.name).join(", ");

  const isSelected = selectedMusic && selectedMusic._id === _id;

  return (
    <section className='musicCard'>
      <div
        className='thumbnailContainer' 
        style={{ 
          backgroundImage: `url(${thumbnail})`, 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover'
        }}
        onClick={() => selectMusic(props)}
      >
        
        {isSelected ? (
          <div className='extraIcons'>
            <img 
              src='https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.webp' 
              className='playingIcon'
            />
          </div>
        ) : null}
        
      </div>

      <div className='songTitle' title={title} onClick={() => selectMusic(props)}>
        {title}
      </div>
      <div className='songArtists' title={artistsList}>
        {artistsList}
      </div>
    </section>
  )
}

export default MusicCards
