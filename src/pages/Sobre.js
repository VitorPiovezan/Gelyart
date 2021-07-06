import React from 'react';
import Header from '../components/Header';
export default function Sobre({mudaScreen}) {
  return (
    <div>
      <Header
        colorheader={'rgba(31, 31, 60, 0.8)'}
        colorheaderPos={'rgba(31, 31, 60, 0.8)'}
        colorMenu={'rgb(31, 31, 60, 0.4)'}
        mudaScreen={mudaScreen}
      />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}
