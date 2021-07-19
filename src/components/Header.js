import { useState, useEffect } from 'react';
import { Header as Head, NavLink } from '../styles/Styled.Header';
import { Container } from '../styles/Styled.Home';
import { Link } from 'react-router-dom';
import { MenuDeviceComponent } from './MenuDevice';

export default function Header({
  colorheader,
  colorheaderPos,
  colorMenu,
  mudaScreen,
}) {
  const [mudaHeader, setMudaHeader] = useState(false);

  useEffect(() => {
    function posicaoScroll() {
      if (window.scrollY > 40) {
        setMudaHeader(true);
      } else {
        setMudaHeader(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);

  function handleScroll() {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }

  // caso queria dar scroll suave para uma parte do seu código
  // function handleProdutos() {
  //   document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
  // }

  return (
    <Container>
      <Head
        acao={mudaHeader ? colorheaderPos : colorheader}
        acaoHeight={mudaHeader ? '4rem' : '6rem'}
      >
        <Link
          to={'/'}
          style={{
            marginLeft: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleScroll}
        >
          <img
            alt="logotipo"
            src="/img/logotipo.png"
            style={{
              maxWidth: `${mudaHeader ? '4rem' : '6rem'}`,
              transition: '0.2s',
            }}
          />
        </Link>
        <div
          style={{
            marginRight: '10%',
          }}
        >
          {mudaScreen ? (
            <div style={{ color: 'white' }}>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px',
                  fontSize: `${mudaHeader ? '1rem' : '1.2rem'}`,
                  transition: '0.2s',
                }}
                to={'/'}
                onClick={handleScroll}
              >
                Home
              </Link>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px',
                  fontSize: `${mudaHeader ? '1rem' : '1.2rem'}`,
                  transition: '0.2s',
                }}
                to={'/sobre'}
                onClick={handleScroll}
              >
                Sobre
              </Link>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px',
                  fontSize: `${mudaHeader ? '1rem' : '1.2rem'}`,
                  transition: '0.2s',
                }}
                to={'/produtos'}
                onClick={handleScroll}
              >
                Produtos
              </Link>
            </div>
          ) : (
            <MenuDeviceComponent
              mudaHeader={mudaHeader}
              colorMenu={colorMenu}
            />
          )}
        </div>
      </Head>
    </Container>
  );
}
