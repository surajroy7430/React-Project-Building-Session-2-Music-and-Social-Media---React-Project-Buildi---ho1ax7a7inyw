import React from 'react';
import './Podcast.css';
import { getSocialPosts } from '../../utils/Apis';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './Posts.jsx/Post';
import CustomLoader from '../Loader/CustomLoader';

const Podcasts = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 50;
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timeOut = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timeOut);
    }, []);

    useEffect(() => {
        const fetchPodcast = async(page) => {
            try {
                const podcast = await getSocialPosts(page, limit);
                setPosts(podcast);
                console.log('podcast', podcast);
            } catch (error) {
                console.log("Error: ", error);
            }
        }

        fetchPodcast(page);
    }, [page]);

    if (isLoading) {
        return <CustomLoader />
    }

  return (
    <section className='posts-section'>
        {posts.map((post, i) => (
            <Post key={i+1} {...post} />
        ))}
    </section>
  )
}

export default Podcasts
