import React, {useState} from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Container } from '../styles/Styled.Home.js';
import Form from '../components/Form.js';
export default function FaleConosco({ mudaScreen }) {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);

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
            width="200px"
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
              ? '/img/banners/fale_conosco_banner.png'
              : '/img/banners/fale_conosco_banner_mobile.png'
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

      <Form />

      <Footer mudaScreen={mudaScreen} />
    </Container>)}
    </>
  );
}
