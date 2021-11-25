import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Container } from '../styles/Styled.Home.js';
import SliderGeral from '../components/Slider.js';
import AOS from 'aos';
import { useEffect } from 'react';
export default function Sobre({ mudaScreen }) {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
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
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          data-aos="fade-down"
          className="left"
          style={{
            display: 'flex',
            maxWidth: '1080px',
            width: '100%',
            flexDirection: `${mudaScreen ? '' : 'column'}`,
            alignItems: 'center',
            padding: '30px 0',
            textAlign: 'center',
          }}
        >
          <div style={{ width: `${mudaScreen ? '40%' : '60%'}` }}>
            <img
              src="img/banners/sobre_banner_test_1.png"
              alt="sobre"
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{
              padding: '30px',
              minWidth: `${mudaScreen ? '450px' : ''}`,
              width: `${mudaScreen ? '60%' : '80%'}`,
            }}
          >
            <h2 style={{ color: '#2b6199' }}>Nossa História</h2>
            <p
              style={{
                textAlign: 'justify',
                padding: `${mudaScreen ? '40px 60px' : '40px 0'}`,
              }}
            >
              Há mais de 30 anos a Gelyart Sorvetes mostra solidez, tradição,
              qualidade, preços justos e acima de tudo: sabor, distribuindo
              alegria e felicidade à mesa dos seus consumidores. O que começou
              com uma pequena sorveteria, fundada em 1991 no centro da cidade de
              Paraíso, uma cidade de 7 mil habitantes, localizada na região
              Noroeste do estado de São Paulo.
            </p>
          </div>
        </div>

        {mudaScreen ? (
          <div
            className="right"
            data-aos="fade-down"
            style={{
              display: 'flex',
              maxWidth: '1080px',
              width: '100%',
              flexDirection: `${mudaScreen ? '' : 'column'}`,
              alignItems: 'center',
              padding: '30px 0',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                padding: '30px',
                minWidth: `${mudaScreen ? '450px' : ''}`,
                width: `${mudaScreen ? '60%' : '80%'}`,
              }}
            >
              <h2 style={{ color: '#2b6199' }}>O que nos tornamos</h2>
              <p
                style={{
                  textAlign: 'justify',
                  padding: `${mudaScreen ? '40px 60px' : '40px 0'}`,
                }}
              >
                Se tornou uma Indústria que atua nos segmentos de Varejo
                (Produtos prontos para consumo), disponibilizando freezers em
                sistema de comodato, Sorveterias (fornecimento de grandes
                porções), e também nas grandes redes de Supermercados (produtos
                para levar para casa).
              </p>
            </div>

            <div style={{ width: `${mudaScreen ? '40%' : '60%'}` }}>
              <img
                src="img/banners/sobre_banner_test_2.png"
                alt="sobre"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        ) : (
          <div
            className="right"
            data-aos="fade-down"
            style={{
              display: 'flex',
              maxWidth: '1080px',
              width: '100%',
              flexDirection: `${mudaScreen ? '' : 'column'}`,
              alignItems: 'center',
              padding: '30px 0',
              textAlign: 'center',
            }}
          >
            <div style={{ width: `${mudaScreen ? '40%' : '60%'}` }}>
              <img
                src="img/banners/sobre_banner_test_2.png"
                alt="sobre"
                style={{ width: '100%' }}
              />
            </div>
            <div
              style={{
                padding: '30px',
                minWidth: `${mudaScreen ? '450px' : ''}`,
                width: `${mudaScreen ? '60%' : '80%'}`,
              }}
            >
              <h2 style={{ color: '#2b6199' }}>O Que nos Tornamos</h2>
              <p
                style={{
                  textAlign: 'justify',
                  padding: `${mudaScreen ? '40px 60px' : '40px 0'}`,
                }}
              >
                Se tornou uma Indústria que atua nos segmentos de Varejo
                (Produtos prontos para consumo), disponibilizando freezers em
                sistema de comodato, Sorveterias (fornecimento de grandes
                porções), e também nas grandes redes de Supermercados (produtos
                para levar para casa).
              </p>
            </div>
          </div>
        )}

        <div
          className="left"
          data-aos="fade-down"
          style={{
            display: 'flex',
            maxWidth: '1080px',
            width: '100%',
            flexDirection: `${mudaScreen ? '' : 'column'}`,
            alignItems: 'center',
            padding: '30px 0',
            textAlign: 'center',
          }}
        >
          <div style={{ width: `${mudaScreen ? '40%' : '60%'}` }}>
            <img
              src="img/banners/sobre_banner_test_3.png"
              alt="sobre"
              style={{ width: '100%' }}
            />
          </div>
          <div
            style={{
              padding: '30px',
              minWidth: `${mudaScreen ? '450px' : ''}`,
              width: `${mudaScreen ? '60%' : '80%'}`,
            }}
          >
            <h2 style={{ color: '#2b6199' }}>Mais Sabor e Qualidade</h2>
            <p
              style={{
                textAlign: 'justify',
                padding: `${mudaScreen ? '40px 60px' : '40px 0'}`,
              }}
            >
              Com um sorvete de sabor irresistível, rapidamente a marca ganhou a
              confiança e credibilidade dos consumidores, Hoje é uma das
              principais marcas de sorvetes regionais, focada na Qualidade,
              Inovação, Sustentabilidade e Responsabilidade em toda a cadeia
              produtiva.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" style={{ paddingTop: '80px' }}>
        <SliderGeral mudaScreen={mudaScreen} />
      </div>

      {/* <div data-aos="fade-left" style={{ paddingTop: '80px' }}>
        <SliderGeral mudaScreen={mudaScreen} />
      </div>

se tornou uma Indústria que atua
              nos segmentos de Varejo (Produtos prontos para consumo),
              disponibilizando freezers em sistema de comodato, Sorveterias
              (fornecimento de grandes porções), e também nas grandes redes de
              Supermercados (produtos para levar para casa).
              
      <div
        data-aos="fade-right"
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
      </div> */}

      <Footer mudaScreen={mudaScreen} />
    </Container>
  );
}
