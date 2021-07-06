import { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import { Header as Head } from '../styles/Styled.Header';
import { Container } from '../styles/Styled.Home';
import { Link } from 'react-router-dom';
import { ListItem } from '@material-ui/core';

export function MenuDeviceComponent({mudaHeader, colorMenu}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <List
          component="nav"
          aria-label="Device settings"
          onClick={handleClickListItem}
        >
          <div
            style={{
              width: `${mudaHeader ? '2rem' : '3rem'}`,
              height: `${mudaHeader ? '2rem' : '3rem'}`,
              background: `${colorMenu}`,
              borderRadius: '50%',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              transition: '0.2s',
            }}
          >
            <Icon
              fontSize={`${mudaHeader ? '' : 'large'}`}
              style={{ transition: '0.2s', color: 'white' }}
            >
              menu
            </Icon>
          </div>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to={'/'}>
            Home
          </MenuItem>
          <MenuItem component={Link} to={'/sobre'}>
            Sobre
          </MenuItem>
          <MenuItem component={Link} to={'/'}>
            Produtos
          </MenuItem>
        </Menu>
    </>
  )
}
