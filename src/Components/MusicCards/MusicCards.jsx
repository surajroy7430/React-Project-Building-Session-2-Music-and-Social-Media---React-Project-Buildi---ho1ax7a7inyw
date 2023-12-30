import React from 'react';
import './MusicCards.css';

const MusicCards = (props) => {
  const { _id, artist, audio_url, title, thumbnail } = props;
  const artistsList = artist.map((item) => item.name).join(", ");
  return (
    <section className='musicCard'>
      <img 
        src={thumbnail} 
        alt={title}
        className='thumbnailImg'
      />
      <div className='songTitle' title={title}>
        {title}
      </div>
      <div className='songArtists' title={artistsList}>
        {artistsList}
      </div>
    </section>
  )
}

export default MusicCards
