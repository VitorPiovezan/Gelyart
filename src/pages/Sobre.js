import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Container } from '../styles/Styled.Home.js';
import SliderGeral from '../components/Slider.js';
import AOS from 'aos';
import { useEffect, useState } from 'react';
export default function Sobre({ mudaScreen }) {

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <img
            src="/img/logotipo.png"
            alt="logo"
            width="300px"
            style={{ marginTop: '-150px' }}
          />
          <img
            src="/img/loading.png"
            className="App-logo"
            alt="loading"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      ) : (
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
            <h2 style={{ color: '#2b6199' }}>Nossa Hist??ria</h2>
            <p
              style={{
                textAlign: 'justify',
                padding: `${mudaScreen ? '40px 60px' : '40px 0'}`,
              }}
            >
              H?? mais de 30 anos a Gelyart Sorvetes mostra solidez, tradi????o,
              qualidade, pre??os justos e acima de tudo: sabor, distribuindo
              alegria e felicidade ?? mesa dos seus consumidores. O que come??ou
              com uma pequena sorveteria, fundada em 1991 no centro da cidade de
              Para??so, uma cidade de 7 mil habitantes, localizada na regi??o
              Noroeste do estado de S??o Paulo.
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
                Se tornou uma Ind??stria que atua nos segmentos de Varejo
                (Produtos prontos para consumo), disponibilizando freezers em
                sistema de comodato, Sorveterias (fornecimento de grandes
                por????es), e tamb??m nas grandes redes de Supermercados (produtos
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
            data-aos="fade-right"
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
                Se tornou uma Ind??stria que atua nos segmentos de Varejo
                (Produtos prontos para consumo), disponibilizando freezers em
                sistema de comodato, Sorveterias (fornecimento de grandes
                por????es), e tamb??m nas grandes redes de Supermercados (produtos
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
              Com um sorvete de sabor irresist??vel, rapidamente a marca ganhou a
              confian??a e credibilidade dos consumidores, Hoje ?? uma das
              principais marcas de sorvetes regionais, focada na Qualidade,
              Inova????o, Sustentabilidade e Responsabilidade em toda a cadeia
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

se tornou uma Ind??stria que atua
              nos segmentos de Varejo (Produtos prontos para consumo),
              disponibilizando freezers em sistema de comodato, Sorveterias
              (fornecimento de grandes por????es), e tamb??m nas grandes redes de
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
              <h2 style={{ color: '#2b6199' }}>Nossa Hist??ria</h2>
              <p>
                H?? mais de 30 anos a Gelyart Sorvetes mostra solidez, tradi????o,
                qualidade, pre??os justos e acima de tudo: sabor, distribuindo
                alegria e felicidade ?? mesa dos seus consumidores. O que come??ou
                com uma pequena sorveteria, fundada em 1991 no centro da cidade
                de Para??so, uma cidade de 7 mil habitantes, localizada na regi??o
                Noroeste do estado de S??o Paulo, se tornou uma Ind??stria que
                atua nos segmentos de Varejo (Produtos prontos para consumo),
                disponibilizando freezers em sistema de comodato, Sorveterias
                (fornecimento de grandes por????es), e tamb??m nas grandes redes de
                Supermercados (produtos para levar para casa).
              </p>
              <p>
                Com um sorvete de sabor irresist??vel, rapidamente a marca ganhou
                a confian??a e credibilidade dos consumidores, Hoje ?? uma das
                principais marcas de sorvetes regionais, focada na Qualidade,
                Inova????o, Sustentabilidade e Responsabilidade em toda a cadeia
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
    </Container>)}</>
  );
}
