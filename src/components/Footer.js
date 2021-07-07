import React from 'react';
import { Container } from '../styles/Styled.Home';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

export default function Footer({ mudaScreen }) {
  return (
    <Container
      style={{
        height: `${mudaScreen ? '200px' : '330px'}`,
        backgroundColor: '#2b6199',
        marginTop: '1rem',
      }}
    >
      <div
        className="FT"
        style={{
          width: '900px',
          minWidth: '300px',
          display: 'flex',
          alignItems: `${mudaScreen ? 'center' : ''}`,
          justifyContent: 'space-between',
          color: 'white',
          padding: '30px 40px',
          flexDirection: `${mudaScreen ? 'row' : 'column'}`,
        }}
      >
        <div
          className="FTContato"
          style={{ width: `${mudaScreen ? '40%' : '90%'}` }}
        >
          <p style={{ fontSize: '1rem' }}>
            <strong>Endereço: </strong>Rodovia Municipal Paraiso a Palmares, km
            1,6, S/N na cidade de Paraiso-SP
          </p>
          <p style={{ fontSize: '1rem' }}>
            <strong>Telefone/Whats: </strong>+55 00 00000-0000
          </p>
          <p style={{ fontSize: '0.8rem' }}>
            © 2021 Todos os Direitos Reservados © 2021 Gelyart Sorvetes
          </p>
        </div>
        <div className="FTRedesSociais">
          <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Resdes Sociais</p>
          <a
            rel="noreferrer"
            href="https://facebook.com"
            target="_blank"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <FacebookIcon style={{ fontSize: '2rem' }} />
          </a>
          <a
            rel="noreferrer"
            href="https://instagram.com"
            target="_blank"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <InstagramIcon style={{ fontSize: '2rem' }} />
          </a>
        </div>
      </div>
    </Container>
  );
}
