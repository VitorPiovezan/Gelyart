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
  const handleClick = (link) => {
      if (!mouseMoved) {
      history.push(link);
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
      }
  };
  

  return (
    <>
      <img
        alt="background"
        src={
          mudaScreen
            ? '/img/background_homePage_desktop.jpg'
            : '/img/background_homePage.jpg'
        }
        style={{
          width: '100%',
        }}
      />

      <Header
        colorheader={'rgba(0, 0, 0, 0)'}
        colorheaderPos={'rgba(31, 18, 4, 0.8)'}
        colorMenu={'rgb(31, 18, 4, 0.4)'}
        mudaScreen={mudaScreen}
      />

      <ContainerHome>
        <h1 id="produtos" style={{ color: '#286198', textAlign: 'center' }}>
          CONHEÇA NOSSA LINHA DE PRODUTOS
        </h1>

        <ProdutosSlider widthScreen={`${mudaScreen ? '90%' : '100%'}`}>
          <Slider {...settings}>
            {categorias.map(item => {
              return (
                <div key={item.id} style={{ width: '100%' }}>
                  <div onMouseMove={() => setMouseMoved(true)}
                        onMouseDown={() => setMouseMoved(false)}
                        onMouseUp={() => handleClick(`/produtos/${item.name}`)}
                        style={{cursor: 'pointer'}}>
                    <DivSlider>
                      <ImgSlider alt={item.name} src={item.banner} />
                    </DivSlider>
                  </div>
                </div>
              );
            })}
          </Slider>
        </ProdutosSlider>
      </ContainerHome>

      <Footer mudaScreen={mudaScreen} />
    </>
  );
}
