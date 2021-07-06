import Header from '../components/Header';
import { categorias } from '../data/data';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function HomePage({mudaScreen}) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  return (
    <div
      style={{
        maxWidth: '100%',
        margin: 'auto',
        textAlign: 'center'
      }}
    >
     <img
        alt="background"
        src={mudaScreen?'/img/background_homePage_desktop.jpg':'/img/background_homePage.jpg'}
        style={{
          width: '100%'
        }}
      />
      
      <Header
        colorheader={'rgba(0, 0, 0, 0)'}
        colorheaderPos={'rgba(31, 18, 4, 0.8)'}
        colorMenu={'rgb(31, 18, 4, 0.4)'}
        mudaScreen={mudaScreen}
      />

      <div className="Containerhome" style={{flexDirection: 'column',margin: 'auto', marginTop: '1rem',display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '1200px'}}>
      <h1 style={{color: '#286198'}}>CONHEÇA NOSSA LINHA DE PRODUTOS</h1>
          
          
      <div style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        
        {categorias.map((item) => {
        return(
          <div key={item.id}>
            <Link to={'/'}>
              <div style={{width: '300px',padding: '20px 20px'}}><img style={{width: '100%', borderRadius: '20px ',boxShadow: '4px 4px 4px 3px rgba(0, 0, 0, 0.2)'}} src={item.banner}/></div>
            </Link>
          </div>
        )
      })}</div>
      </div>
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}

