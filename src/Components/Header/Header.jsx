import { AppBar, Avatar, Button, List, ListItem, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { Headphones, Home, Podcasts, ExpandMore } from '@mui/icons-material';
import SearchBar from './SearchBar';
import { ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg'

const Header = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
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
              <Podcasts fontSize='large' />
<<<<<<< HEAD
              <span>Social</span>
=======
              <span>Podcasts</span>
>>>>>>> 111007acd7961629143e9394f094e28ae33d4584
            </Button>
          </li>
          <li className='headerLinks'>
            <Button 
              LinkComponent={NavLink}
              to='/library'
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
            <Avatar sx={{ background: 'grey', marginLeft: '25px' }} />
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Header
