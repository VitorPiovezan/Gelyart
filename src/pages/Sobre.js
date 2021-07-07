import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Sobre({ mudaScreen }) {
  return (
    <>
      <Header
        colorheader={'rgba(31, 31, 60, 0.8)'}
        colorheaderPos={'rgba(31, 31, 60, 0.8)'}
        colorMenu={'rgb(31, 31, 60, 0.4)'}
        mudaScreen={mudaScreen}
      />
      <div style={{ height: '1000px' }}></div>
      <Footer mudaScreen={mudaScreen} />
    </>
  );
}
