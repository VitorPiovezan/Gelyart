import { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import { Header as Head } from '../components/Styled.Header';
import { Link } from 'react-router-dom';

export default function Header({ colorheader, colorMenu }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mudaHeader, setMudaHeader] = useState(false);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    function posicaoScroll() {
      if (window.scrollY > 40) {
        setMudaHeader(true);
      } else {
        setMudaHeader(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <Head
      acao={mudaHeader ? colorheader : ''}
      acaoHeight={mudaHeader ? '4rem' : '6rem'}
    >
      <img
        alt="logotipo"
        src="/img/logotipo.png"
        style={{
          maxWidth: `${mudaHeader ? '4rem' : '6rem'}`,
          marginLeft: '10%',
          transition: '0.2s',
        }}
      />
      <div
        style={{
          marginRight: '10%',
        }}
      >
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
      </div>
    </Head>
  );
}
