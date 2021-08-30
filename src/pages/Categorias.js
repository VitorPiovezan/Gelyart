import { useParams } from 'react-router-dom';
import { categorias } from '../data/data';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {CardProduct, ImgProduct} from '../styles/Styled.Categorias';

export default function Categorias({ mudaScreen }) {
  let data = useParams();
  const [arrayCategoria, setArrayCategoria] = useState({});
  const [produtosOnly, setProdutosOnly] = useState(false);

  useEffect(() => {
    categorias.map(item => {
      if (item.link === data.name) {
        if (item.produtos !== undefined) {
          setProdutosOnly(true);
        }
        setArrayCategoria(item);
      }
    });
    console.log(arrayCategoria);
  }, [data]);

  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
        colorheader={'rgba(0, 0, 0, 0.0)'}
        colorheaderPos={'rgba(31, 31, 60, 0.8)'}
        colorMenu={'rgb(31, 31, 60, 0.4)'}
        mudaScreen={mudaScreen}
      />
<div style={{display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap'}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: `${mudaScreen ? '100%' : '90%'}`,
          maxWidth: '1000px',
          color: '#2b6199',
          fontWeight: 'bold'
        }}
      >
        <h1 style={{ padding: '50px'}}>
          {arrayCategoria.name}
        </h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            flexWrap: 'wrap'
          }}
        >
          {produtosOnly
            ? arrayCategoria.produtos.map(item => (
                <CardProduct acao={mudaScreen ? "30%" : "45%" }>
                  {' '}
                  <div
                    style={{
                      padding: '20px 0px',
                      borderBottom: 'solid 1px #cecece',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <ImgProduct
                      alt={item.name}
                      src={item.img}
                    />
                  </div>
                  <p>{item.name}</p>
                </CardProduct>
              ))
            : ''}
        </div>
      </div></div>

      <div style={{ height: '100rem' }}></div>
      <Footer mudaScreen={mudaScreen} />
    </>
  );
}
