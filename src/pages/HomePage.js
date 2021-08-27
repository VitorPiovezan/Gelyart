import Header from '../components/Header';
import Footer from '../components/Footer';
import RevendedorHome from '../components/Revendedor.Home';
import { ContainerHome, Container } from '../styles/Styled.Home';
import LinhaProdutosHome from '../components/LinhaProdutos.Home';
import { HandleScroll } from '../configs/configs';
import { Link } from 'react-router-dom';

export default function HomePage({ mudaScreen }) {
  return (
    <Container>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/background_homePage_desktop.png'
              : '/img/background_homePage.png'
          }
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <Header
        colorheader={'rgba(0, 0, 0, 0)'}
        colorheaderPos={'rgba(0, 0, 0, 0.8)'}
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

        <LinhaProdutosHome mudaScreen={mudaScreen} />
        <Link
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
          }}
          to={'/produtos'}
          onClick={HandleScroll}
        >
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
        </Link>
      </ContainerHome>

      <RevendedorHome mudaScreen={mudaScreen} />

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
    </Container>
  );
}
