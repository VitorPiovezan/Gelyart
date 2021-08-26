import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '../styles/Styled.Home';
export default function Sobre({ mudaScreen }) {
  return (
    <Container>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/sobre_banner.png'
              : '/img/banners/sobre_banner_mobile.png'
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

      <div
        style={{
          padding: '50px 0px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: `${mudaScreen ? '' : 'column'}`,
            justifyContent: 'center',
            width: `${mudaScreen ? '100%' : '90%'}`,
            maxWidth: '900px',
            boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.3)',
            borderRadius: '20px',
          }}
        >
          <div
            style={{
              margin: 'auto',
              backgroundColor: '#ffffff',
              width: `${mudaScreen ? '100%' : '100%'}`,
              borderRadius: `${mudaScreen ? '20px 0 0 20px' : '20px 20px 0 0'}`,
            }}
          >
            <div style={{ padding: '30px' }}>
              <h2 style={{ color: '#2b6199' }}>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat vestibulum neque ac dignissim. Fusce vulputate urna in
                nisl fermentum aliquet vitae bibendum lectus. Phasellus sit amet
                ornare elit. Aenean ac consectetur eros. Nam auctor eget arcu at
                aliquet. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Aliquam erat volutpat. Fusce porttitor ipsum at lectus
                semper faucibus. Aliquam erat volutpat. Sed volutpat aliquet
                enim vitae commodo. Sed suscipit felis vel eros scelerisque, eu
                ultricies turpis congue.
              </p>
              <p>
                Donec orci ante, placerat et interdum sed, mattis vitae felis.
                Ut volutpat ultricies ligula. Nulla tortor magna, malesuada at
                dignissim in, consequat sed lorem. Aliquam quis justo pulvinar
                dolor pellentesque vestibulum dignissim nec nisi. Praesent
                varius sit amet purus ac luctus. Pellentesque eu sapien tellus.
                Nullam lobortis fermentum justo, vel pellentesque odio aliquet
                eu. Curabitur sit amet mattis velit. Mauris non ultricies massa.
                In eu ullamcorper neque. Pellentesque a tristique diam.
              </p>
            </div>
          </div>
          <div
            style={{
              margin: 'auto',
              backgroundColor: '#2b6199',
              width: `${mudaScreen ? '50%' : '100%'}`,
              height: '100%',
              borderRadius: `${
                mudaScreen ? '0 20px 20px 0' : '0 0 20px 20px '
              }`,
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                alt="logotipo"
                src="/img/logotipo.png"
                style={{
                  maxWidth: `${mudaScreen ? '15rem' : '6rem'}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer mudaScreen={mudaScreen} />
    </Container>
  );
}
