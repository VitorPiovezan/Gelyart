import { sobre } from '../data/data';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ImgSliderGeral,
  ProdutosSliderGeral,
  DivSliderGeral,
} from '../styles/Styled.Home.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function SliderGeral({ mudaScreen, action }) {
  //configurações do slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: mudaScreen ? 2 : 1,
    slidesToScroll: mudaScreen ? 2 : 1,
    initialSlide: 0,
    autoplay: true,
    focusOnSelect: true,
    centerMode: true,
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
    <ProdutosSliderGeral widthScreen={`${mudaScreen ? '90%' : '100%'}`}>
      <Slider {...settings}>
        {sobre.map(item => {
          return (
            <div key={item.id} style={{ width: '100%' }}>
              <div
                onMouseMove={() => setMouseMoved(true)}
                onMouseDown={() => setMouseMoved(false)}
              >
                <DivSliderGeral>
                  <ImgSliderGeral
                    style={{
                      marginLeft: `${mudaScreen ? '60px' : '55px'}`,
                    }}
                    alt={item.banner}
                    src={item.banner}
                  />
                </DivSliderGeral>
              </div>
            </div>
          );
        })}
      </Slider>
    </ProdutosSliderGeral>
  );
}
