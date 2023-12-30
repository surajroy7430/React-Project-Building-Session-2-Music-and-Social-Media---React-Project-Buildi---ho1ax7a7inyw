import React, { useState } from 'react';
import './Library.css';

const Library = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  return (
    <div>
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>Music</MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>Social</MenuItem>
        </Menu>
    </div>
  )
}

export default Library
