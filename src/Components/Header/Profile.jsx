import { Avatar } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [showMenu, setShowMenu] = useState(false);
    const profileRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const hideMenu = (e) => {
          if (profileRef.current.contains(e.target)) {
            return;
          }
          setShowMenu(false);
        };
        document.addEventListener("click", hideMenu);
        return () => {
          document.removeEventListener("click", hideMenu);
        };
    }, []);

  return (
    <div onClick={() => {setShowMenu(!showMenu)}} ref={profileRef}>
        <Avatar sx={{ background: 'grey', marginLeft: '25px', cursor: 'pointer' }} />
        
        {showMenu && (
            <section className="profileMenu">
                <button 
                    className="signin_Btn menuItems" 
                    onClick={() => {navigate('/signin')}}
                >
                    Sign In
                </button>
            </section>
        )}
    </div>
  )
}

export default Profile
