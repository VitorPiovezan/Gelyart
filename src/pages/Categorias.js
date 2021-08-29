import { useParams } from 'react-router-dom';
import { categorias } from '../data/data';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: `${mudaScreen ? '100%' : '90%'}`,
          maxWidth: '1000px',
        }}
      >
        <h1 style={{ padding: '20px', color: '#2b6199' }}>
          {arrayCategoria.name}
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {produtosOnly
            ? arrayCategoria.produtos.map(item => (
                <div
                  style={{
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginLeft: '15px',
                    minWidth: '200px',
                    boxShadow: '3px 3px 4px 1px rgba(0, 0, 0, 0.2)',
                  }}
                >
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
                    <img
                      alt={item.name}
                      style={{
                        width: '130px',
                      }}
                      src={item.img}
                    />
                  </div>
                  <p>{item.name}</p>
                </div>
              ))
            : ''}
        </div>
      </div>

      <div style={{ height: '100rem' }}></div>
      <Footer mudaScreen={mudaScreen} />
    </>
  );
}
