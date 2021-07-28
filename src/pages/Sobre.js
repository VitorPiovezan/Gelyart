import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Container} from '../styles/Styled.Home'
export default function Sobre({ mudaScreen }) {
  return (
    <Container>
      <Header
        colorheader={'rgba(31, 31, 60, 0.8)'}
        colorheaderPos={'rgba(31, 31, 60, 0.8)'}
        colorMenu={'rgb(31, 31, 60, 0.4)'}
        mudaScreen={mudaScreen}
      />
      <div style={{ height: '300px' }}></div>

      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <div style={{display: 'flex', flexDirection: `${mudaScreen ? '' : 'column' }`, justifyContent: 'center', width: `${mudaScreen ? '50%' : '90%' }`, maxWidth: '900px'}}>
          <div style={{margin: 'auto', backgroundColor: '#2b6199', width: `${mudaScreen ? '50%' : '90%' }`, height:'300px', borderRadius: `${mudaScreen ? '20px 0 0 20px' : '20px 20px 0 0' }` }}></div>
          <div style={{margin: 'auto', backgroundColor: '#cecece', width: `${mudaScreen ? '50%' : '90%' }`, height:'300px', borderRadius: `${mudaScreen ? '0 20px 20px 0' : '0 0 20px 20px ' }` }}></div>
        </div>
      </div>

      <div style={{ height: '1000px' }}></div>
      <Footer mudaScreen={mudaScreen} />
    </Container>
  );
}
