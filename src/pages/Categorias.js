import { useParams } from 'react-router-dom';
import { categorias } from '../data/data';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  CardProduct,
  ImgProduct,
  ProdutosList,
} from '../styles/Styled.Categorias';
import LinhaProdutosHome from '../components/LinhaProdutos.Home';
import { ContainerHome } from '../styles/Styled.Home';

export default function Categorias({ mudaScreen }) {
  let data = useParams();
  const [arrayCategoria, setArrayCategoria] = useState({});
  const [produtosOnly, setProdutosOnly] = useState(false);
  const [active, setActive] = useState(false);
  const [arrayAtiva, setArrayAtiva] = useState(false);

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
      {produtosOnly ? (
        <ContainerHome style={{ marginBottom: '30px' }}>
          <div
            style={{
              marginTop: '20px',
              width: '100%',
              height: '60px',
              backgroundColor: '#2b6199',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2 style={{ color: '#fff' }}>{arrayCategoria.name}</h2>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: '#fafafa',
              marginBottom: '30px',
              flexDirection: `${mudaScreen ? '' : 'column'}`,
              alignItems: `${mudaScreen ? '' : 'center'}`,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <img
                alt={arrayCategoria.name}
                src={arrayCategoria.img_product}
                width="70%"
                style={{ padding: '50px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: `${mudaScreen ? '50px 0' : ''}`,
                width: `${mudaScreen ? '100%' : '90%'}`,
              }}
            >
              <h3>{arrayCategoria.name}</h3>
              <p>
                <strong>Peso Total:</strong> {arrayCategoria.weigth}
              </p>
              <div
                style={{
                  marginTop: '15px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#dfdfdf',
                    padding: '0px 10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: '0.5s',
                    userSelect: 'none',
                  }}
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  <p style={{ fontWeight: 'bold' }}>Sabores</p>
                  {active ? (
                    <p style={{ transition: '0.5s' }}>-</p>
                  ) : (
                    <p style={{ transition: '0.5s' }}>+</p>
                  )}
                </div>
                <ProdutosList
                  acao={active ? '' : '0%'}
                  overflow={active ? '' : 'hidden'}
                  padding={active ? '10px' : '0px 10px'}
                  color={active ? '#000' : 'rgb(0,0,0,0)'}
                >
                  {active
                    ? arrayCategoria.produtos.map(item => (
                        <div style={{ padding: '5px 0' }}>{item.name}</div>
                      ))
                    : ''}
                </ProdutosList>
              </div>
            </div>
          </div>
          <LinhaProdutosHome
            action={arrayCategoria.link}
            mudaScreen={mudaScreen}
          />
        </ContainerHome>
      ) : (
        <div style={{ height: '600px' }}></div>
      )}

      {/* <div style={{display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap'}}>
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
      </div></div> */}

      <Footer mudaScreen={mudaScreen} />
    </>
  );
}
