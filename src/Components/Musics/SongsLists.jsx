import React, { useEffect, useState } from 'react';
import { getMusicLists } from '../../utils/Apis';
import MusicCards from '../MusicCards/MusicCards';
import CustomLoader from '../Loader/CustomLoader';

const SongsLists = () => {
    const [songs, setSongs] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 100;

    useEffect(() => {
        const fetchMusics = async(page) => {
            try {
                const musics = await getMusicLists(page, limit);
                setSongs(musics);
                console.log('musics', musics);
            } catch (error) {
                console.log("Error: ", error);
            }
        }

        fetchMusics(page);
    }, [page]);

  return (
        <>
            <div className="featured">Featured Songs</div>
            <section className='songsList-section'>
                {songs.map((song, i) => (
                    <MusicCards key={i+1} {...song} />
                ))}
            </section>
        </>
    )
}

export default SongsLists
