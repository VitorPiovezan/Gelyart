import Header from '../components/Header';
import { data } from '../data/data';
import React, { useState, useEffect } from 'react';

export default function HomePage({mudaScreen}) {

  return (
    <div
      style={{
        maxWidth: '100%',
        margin: 'auto',
        textAlign: 'center'
      }}
    >
      {mudaScreen ? <img
        alt="background"
        src="/img/background_homePage.jpg"
        style={{
          width: '100%'
          
        }}
      /> : <img
        alt="background"
        src="/img/background_homePage.jpg"
        style={{
          width: '100%'
          
        }}
      />}
      
      <Header
        colorheader={'rgba(0, 0, 0, 0)'}
        colorheaderPos={'rgba(31, 18, 4, 0.8)'}
        colorMenu={'rgb(31, 18, 4, 0.4)'}
        mudaScreen={mudaScreen}
      />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}

