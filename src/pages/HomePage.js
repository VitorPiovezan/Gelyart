import Header from '../components/Header';
import { data } from '../data/data';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const options = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

export default function HomePage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(data[0]);
  return (
    <div
      style={{
        maxWidth: '100%',
        // minHeight: '270px',
        // maxHeight: '673px',
        margin: 'auto',
        // color: 'white',
      }}
    >
      <img
        alt="background"
        src="/img/background_homePage.jpg"
        style={{
          width: '100%',
          maxWidth: '100%',
          position: 'absolute',
          top: 0,
        }}
      />
      <div style={{ position: 'relative' }}>
        <img
          alt="logotipo"
          src="/img/logotipo.png"
          style={{
            maxWidth: '20%',
            marginLeft: '5%',
            marginTop: '1%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            marginRight: '5%',
            marginTop: '5%',
          }}
        >
          <List
            component="nav"
            aria-label="Device settings"
            onClick={handleClickListItem}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'white',
                borderRadius: '50%',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon>menu</Icon>
            </div>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>Home</MenuItem>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Produtos</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
    // <div
    //   style={{
    //     backgroundImage: 'url(/img/background_homePage.jpg)',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     maxWidth: '900px',
    //     minHeight: '270px',
    //     maxHeight: '673px',
    //     margin: 'auto',
    //     color: 'white',
    //   }}
    // >
    //   <div style={{}}>
    //     <img
    //       alt="logotipo"
    //       src="/img/logotipo.png"
    //       style={{
    //         maxWidth: '20%',
    //         marginLeft: '5%',
    //         marginTop: '1%',
    //       }}
    //     />
    //   </div>
    // </div>
  );
}
