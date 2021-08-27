import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '../styles/Styled.Home';
export default function Produtos({ mudaScreen }) {
  return (
    <Container>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/produtos_banner.png'
              : '/img/banners/produtos_banner_mobile.png'
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

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/acai_banner_produtos.png'
              : '/img/banners/acai_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/classicos_banner_produtos.png'
              : '/img/banners/classicos_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/copos_banner_produtos.png'
              : '/img/banners/copos_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/duo_banner_produtos.png'
              : '/img/banners/duo_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/picolés_banner_produtos.png'
              : '/img/banners/picolés_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <Footer mudaScreen={mudaScreen} />
    </Container>
  );
}
