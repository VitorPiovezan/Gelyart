import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Container } from '../styles/Styled.Home.js';
import Form from '../components/Form.js';
export default function FaleConosco({ mudaScreen }) {
  return (
    <Container>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/fale_conosco_banner.png'
              : '/img/banners/fale_conosco_banner_mobile.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <Header
        colorheader={'rgba(0, 0, 0, 0)'}
        colorheaderPos={'rgba(31, 31, 60, 0.8)'}
        colorMenu={'rgb(31, 31, 60, 0.4)'}
        mudaScreen={mudaScreen}
      />

      <Form />

      <Footer mudaScreen={mudaScreen} />
    </Container>
  );
}
