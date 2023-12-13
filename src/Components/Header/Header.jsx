import { AppBar, Avatar, List, ListItem, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { Headphones, Home, Podcasts, ExpandMore } from '@mui/icons-material';
import SearchBar from './SearchBar';

const Header = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar className="header" elevation={0}>
      <Toolbar disableGutters>
        <List className='headertabs'>
          <ListItem>
            <Link to='/'>
              {isMD ? (
                <img src='https://d5fx445wy2wpk.cloudfront.net/static/logo_stacked.svg' alt='Amazon Prime Music' />
              ) : (
                <img 
                  src='https://d5fx445wy2wpk.cloudfront.net/static/logo.svg' 
                  alt='Amazon Prime Music'
                />
              )}
            </Link>
          </ListItem>
          <ListItem className='headerTabsAndSearchBar'>
            <div className='headerTabs'>
              <NavLink to='/'><Home /> Home</NavLink>
              <NavLink to='/social'><Podcasts /> Podcasts</NavLink>
              <NavLink to='/library'><Headphones /> Library<ExpandMore /> </NavLink>
            </div>
            <SearchBar />
            <Avatar sx={{ background: 'grey', marginLeft: '25px' }} />
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default Header
