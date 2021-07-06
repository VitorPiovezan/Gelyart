import Header from '../components/Header';
import { data } from '../data/data';
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  console.log(data[0]);
  return (
    <div
      style={{
        maxWidth: '100%',
        margin: 'auto',
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
      <Header
        colorheader={'rgba(31, 18, 4, 0.8)'}
        colorMenu={'rgb(31, 18, 4, 0.4)'}
      />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}
