import React from 'react';
import { ContainerFooter } from '../styles/Styled.Footer';
import { FT } from '../styles/Styled.Footer';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

export default function Footer({ mudaScreen }) {
  return (
    <ContainerFooter
      style={{
        height: `${mudaScreen ? '200px' : '330px'}`,
        backgroundColor: '#2b6199',
        fontFamily: 'Segoe UI',
      }}
    >
      <FT
        items={`${mudaScreen ? 'center' : ''}`}
        flex={`${mudaScreen ? 'row' : 'column'}`}
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
          <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Redes Sociais</p>
          <a
            rel="noreferrer"
            href="https://facebook.com"
            target="_blank"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Icon style={{ fontSize: '2rem' }}>facebook</Icon>
          </a>
          <a
            rel="noreferrer"
            href="https://instagram.com"
            target="_blank"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <img
              alt="instagram"
              src="/img/logo/instagram.png"
              style={{
                width: '1.8rem',
                marginBottom: '2px',
                marginLeft: '5px',
              }}
            />
          </a>
        </div>
      </FT>
    </ContainerFooter>
  );
}
