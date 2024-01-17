import { AppBar, Avatar, Button, Menu, MenuItem, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { Headphones, Home, Podcasts, ExpandMore } from '@mui/icons-material';
import SearchBar from './SearchBar';
import { ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg'
import Profile from './Profile';
import WarningDialog from '../Loader/WarningDialog';

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  const handleWarningOpen = () => {
    setOpen(true);
  };

  const handleWarningClose = () => {
    setOpen(false);
  };

  const handleAvatarClick = (event) => {
    setAnchorElUser(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorElUser(null);
  }

  return (
    <>
    <AppBar className="header" elevation={0}>
      <Toolbar className='toolbar' disableGutters>
        <ul className='headerTabs'>
          <li className='amazonlogoComp'>
            <Link to='/' className='musicLogo'>
                <img 
                  src={isMD ? 
                    'https://d5fx445wy2wpk.cloudfront.net/static/logo_stacked.svg' : 
                    'https://d5fx445wy2wpk.cloudfront.net/static/logo.svg'
                  }
                  alt='Amazon Prime Music'
                  title='Amazon Prime Music'
                />
            </Link>
          </li>
          <li className='headerLinks'>
            <Button LinkComponent={NavLink} to='/'>
              <Home fontSize='large' />
              <span>Home</span>
            </Button>
          </li>
          <li className='headerLinks'>
            <Button LinkComponent={NavLink} to='/social'>
              <Podcasts fontSize='large' /> Social
            </Button>
          </li>
          <li className='headerLinks'>
            <Button 
              onClick={handleWarningOpen}
              // LinkComponent={NavLink}
              // to='/library'
            >
              <Headphones fontSize='large' />
              <span>Library</span>
              <ExpandMore fontSize='small' />
            </Button>
          </li>

          <div className='headerSearchBar'>
            <SearchBar />
            <button className='SearchIcon'>
              <SearchIcon />
            </button>
          </div>
          <li>
            <Profile />
          </li>
        </ul>
      </Toolbar>
    </AppBar>
    <WarningDialog warningClose={handleWarningClose} />
    </>
  )
}

export default Header
