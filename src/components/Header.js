import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Person, Forum } from '@material-ui/icons';
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    border-bottom: 1px solid #f9f9f9;
    .header__icon{
        padding: 20px;
    }
`
const TinderImage = styled.img`
    object-fit: contain;
    height: 40px;
`

const Header = () => {
  return (
    <HeaderContainer>
        <Link to="/">
            <IconButton>
                <Person fontSize="large" className="header__icon" />
            </IconButton>
        </Link>
        <Link to="/">
            <TinderImage src="https://cdn.worldvectorlogo.com/logos/tinder-icon.svg" alt="header" />
        </Link>
        <Link to="/post">
            <IconButton>
                <Forum fontSize="large" className="header__icon" />
            </IconButton>
        </Link>    
    </HeaderContainer>
  )
}

export default Header