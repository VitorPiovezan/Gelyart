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
              <h2 style={{ color: '#2b6199' }}>Nossa História</h2>
              <p>
                Há mais de 30 anos a Gelyart Sorvetes mostra solidez, tradição,
                qualidade, preços justos e acima de tudo: sabor, distribuindo
                alegria e felicidade à mesa dos seus consumidores. O que começou
                com uma pequena sorveteria, fundada em 1991 no centro da cidade
                de Paraíso, uma cidade de 7 mil habitantes, localizada na região
                Noroeste do estado de São Paulo, se tornou uma Indústria que
                atua nos segmentos de Varejo (Produtos prontos para consumo),
                disponibilizando freezers em sistema de comodato, Sorveterias
                (fornecimento de grandes porções), e também nas grandes redes de
                Supermercados (produtos para levar para casa).
              </p>
              <p>
                Com um sorvete de sabor irresistível, rapidamente a marca ganhou
                a confiança e credibilidade dos consumidores, Hoje é uma das
                principais marcas de sorvetes regionais, focada na Qualidade,
                Inovação, Sustentabilidade e Responsabilidade em toda a cadeia
                produtiva.
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
