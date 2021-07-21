import Header from '../components/Header';
import Footer from '../components/Footer';
import { categorias } from '../data/data';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  ContainerHome,
  ImgSlider,
  DivSlider,
  ProdutosSlider,
} from '../styles/Styled.Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from '../configs/configs';

export default function HomePage({ mudaScreen }) {
  //configurações do slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: mudaScreen ? 3 : 1,
    slidesToScroll: mudaScreen ? 3 : 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    focusOnSelect: true,
    centerMode: mudaScreen ? false : true,
    // swipe: mudaScreen ? false : true,
    arrows: mudaScreen ? true : false,
  };

  const history = useHistory();
  const [mouseMoved, setMouseMoved] = useState(false);
  // console.log(r)
  const handleClick = link => {
    if (!mouseMoved) {
      history.push(link);
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  };

  return (
    <div style={{minWidth: '380px'}}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/background_homePage_desktop.jpg'
              : '/img/background_homePage.jpg'
          }
          style={{
            width: '100%',
            maxWidth: '1600px',
          }}
        />
      </div>

      <Header
        colorheader={'rgba(0, 0, 0, 0)'}
        colorheaderPos={'rgba(31, 18, 4, 0.8)'}
        colorMenu={'rgb(31, 18, 4, 0.4)'}
        mudaScreen={mudaScreen}
      />

      <ContainerHome>
        <h1
          id="produtos"
          style={{
            color: '#286198',
            textAlign: 'center',
            fontSize: `${mudaScreen ? '' : '1.4rem'}`,
          }}
        >
          CONHEÇA NOSSA LINHA DE PRODUTOS
        </h1>

        <ProdutosSlider widthScreen={`${mudaScreen ? '90%' : '100%'}`}>
          <Slider {...settings}>
            {categorias.map(item => {
              return (
                <div key={item.id} style={{ width: '100%'}}>
                  <div
                    onMouseMove={() => setMouseMoved(true)}
                    onMouseDown={() => setMouseMoved(false)}
                    onMouseUp={() => handleClick(`/produtos/${item.link}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <DivSlider>
                      <ImgSlider alt={item.name} src={item.banner} />
                    </DivSlider>
                  </div>
                </div>
              );
            })}
          </Slider>
        </ProdutosSlider>
        <button
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff',
            padding: '0.6rem',
            width: `${mudaScreen ? '30%' : '70%'}`,
            borderRadius: '50px',
            backgroundColor: '#286198',
            marginTop: '3rem',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Veja toda nossa linha
        </button>
      </ContainerHome>

      <div style={{ width: '100%' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto',
          }}
        >
          <img
            alt="frezer"
            src="/img/produtos/freezer-horizontal-gellyart-min.png"
            style={{
              maxWidth: `${mudaScreen ? '40%' : '70%'}`,
              marginLeft: `${mudaScreen ? '15%' : '15%'}`,
              marginBottom: `${mudaScreen ? '-23rem' : '-14rem'}`,
            }}
          />
        </div>

        <div
          style={{
            backgroundColor: '#286198',
            width: '100%',
            height: `${mudaScreen ? '20rem' : '25rem'}`,
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: `${mudaScreen ? '' : '2rem'}`,
          }}
        >
          <div
            style={{
              width: '1200px',
              display: `${mudaScreen ? '' : 'flex'}`,
              justifyContent: `${mudaScreen ? '' : 'center'}`,
            }}
          >
            <div
              style={{
                width: '30%',
                marginLeft: `${mudaScreen ? '65%' : ''}`,
                marginTop: `${mudaScreen ? '4rem' : '13rem'}`,
                fontSize: `${mudaScreen ? '2rem' : '1.4rem'}`,
                color: '#fff',
                display: `${mudaScreen ? '' : 'flex'}`,
                alignItems: `${mudaScreen ? '' : 'center'}`,
                flexDirection: 'column',
              }}
            >
              <p style={{ marginBottom: '-0.1rem' }}>Seja um</p>
              <strong>Revendedor</strong>
              <button
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#fff',
                  padding: '0.6rem',
                  width: `${mudaScreen ? '50%' : '120%'}`,
                  borderRadius: '50px',
                  backgroundColor: '#fdc500',
                  marginTop: '1rem',
                  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Confira Já!
              </button>
            </div>
          </div>
        </div>
      </div>

      {mudaScreen ? (
        ''
      ) : (
        <div
          style={{
            width: '100%',
            height: '0.1rem',
            backgroundColor: '#aaa',
          }}
        />
      )}

      <Footer mudaScreen={mudaScreen} />
    </div>
  );
}
