import Header from '../components/Header';
import Footer from '../components/Footer';
import { categorias } from '../data/data';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContainerHome } from '../styles/Styled.Home';

export default function HomePage({ mudaScreen }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  console.info(0);
  setTimeout(() => console.info(1), 0);
  console.info(2);
  return (
    <div
      style={{
        maxWidth: '100%',
      }}
    >
      <img
        alt="background"
        src={
          mudaScreen
            ? '/img/background_homePage_desktop.jpg'
            : '/img/background_homePage.jpg'
        }
        style={{
          width: '100%',
        }}
      />

      <Header
        colorheader={'rgba(0, 0, 0, 0)'}
        colorheaderPos={'rgba(31, 18, 4, 0.8)'}
        colorMenu={'rgb(31, 18, 4, 0.4)'}
        mudaScreen={mudaScreen}
      />

      <ContainerHome>
        <h1 style={{ color: '#286198', textAlign: 'center' }}>
          CONHEÇA NOSSA LINHA DE PRODUTOS
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {categorias.map(item => {
            return (
              <div key={item.id}>
                <Link to={'/'}>
                  <div style={{ width: '300px', padding: '20px 20px' }}>
                    <img
                      alt={item.name}
                      style={{
                        width: '100%',
                        borderRadius: '20px ',
                        boxShadow: '4px 4px 4px 3px rgba(0, 0, 0, 0.2)',
                      }}
                      src={item.banner}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </ContainerHome>

      <Footer mudaScreen={mudaScreen} />
    </div>
  );
}
