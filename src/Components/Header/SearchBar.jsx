import React from 'react';
import './Header.css';
import { InputBase, alpha, styled } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const SearchBar = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: alpha(theme.palette.common.white, 1),
        '&:hover': {
            cursor: 'pointer',
            
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
      
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        color: 'black',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
      
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'black',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          backgroundColor: alpha(theme.palette.common.white, 1),
        //   borderRadius: '30px',
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '256px',
              height: '72px',
              backgroundColor: alpha(theme.palette.common.white, 0.15),
            },
          },
        },
    }));
  return (
    <Search>
        <SearchIconWrapper>
            <SearchOutlined />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
        />
        {/* <SearchIconWrapper>
            <SearchOutlined />
        </SearchIconWrapper> */}
    </Search>
  )
}

export default SearchBar
