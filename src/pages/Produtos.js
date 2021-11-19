import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '../styles/Styled.Home';
import { Link, useHistory } from 'react-router-dom';
import AOS from 'aos';
export default function Produtos({ mudaScreen }) {
  const history = useHistory();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleClick = link => {
    history.push(link);
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };
  return (
    <Container>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/produtos_banner.png'
              : '/img/banners/produtos_banner_mobile.png'
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
        data-aos="fade-left"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/acai`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/acai_banner_produtos.png'
              : '/img/banners/acai_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-right"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/classicos`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/classicos_banner_produtos.png'
              : '/img/banners/classicos_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-left"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/copos`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/copos_banner_produtos.png'
              : '/img/banners/copos_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-right"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/duo`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/duo_banner_produtos.png'
              : '/img/banners/duo_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-left"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/picole-de-frutas`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/picole_frutas_banner_produtos.png'
              : '/img/banners/picole_frutas_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>
      <div
        data-aos="fade-right"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/picole-leite`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/picole_leite_banner_produtos.png'
              : '/img/banners/picolé_leite_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-left"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/bolo-sorvete`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/bolo_sorvete_banner_produtos.png'
              : '/img/banners/bolo_sorvete_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-right"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/bombom-gelado`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/bombom_gelado_banner_produtos.png'
              : '/img/banners/bombom_gelado_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-left"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/cones`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/cones_banner_produtos.png'
              : '/img/banners/cones_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-right"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/ituzinho`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/ituzinho_banner_produtos.png'
              : '/img/banners/ituzinho_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-left"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/kids`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/kids_banner_produtos.png'
              : '/img/banners/kids_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-right"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/moreninha`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/moreninha_banner_produtos.png'
              : '/img/banners/moreninha_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-left"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/sundae`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/sundae_banner_produtos.png'
              : '/img/banners/sundae_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-right"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/trufados`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/trufados_banner_produtos.png'
              : '/img/banners/trufados_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-left"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/yogurtin`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/yogurtin_banner_produtos.png'
              : '/img/banners/yogurtin_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div
        data-aos="fade-right"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleClick(`/produtos/caixas`)}
      >
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/caixas_banner_produtos.png'
              : '/img/banners/caixas_banner_produtos.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <Footer mudaScreen={mudaScreen} />
    </Container>
  );
}
