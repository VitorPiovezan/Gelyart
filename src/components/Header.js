import { useState, useEffect } from 'react';
import {
  Header as Head,
  NavLink,
  LinkHeader,
} from '../styles/Styled.Header.js';
import { Link } from 'react-router-dom';
import { MenuDeviceComponent } from './MenuDevice.js';
import { HandleScroll } from '../configs/configs.js';

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

  // caso queria dar scroll suave para uma parte do seu código
  // function handleProdutos() {
  //   document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
  // }

  return (
    <>
      <Head
        acaoHeight={mudaHeader ? '5rem' : '6rem'}
        acao={mudaHeader ? colorheaderPos : colorheader}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1400px',
          }}
        >
          <Link
            to={'/'}
            style={{
              marginLeft: '10%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={HandleScroll}
          >
            <img
              alt="logotipo"
              src="/img/logotipo.png"
              style={{
                maxWidth: `${mudaHeader ? '6rem' : '7rem'}`,
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
                <LinkHeader
                  mudaHeader={mudaHeader ? '1rem' : '1.2rem'}
                  to={'/'}
                  onClick={HandleScroll}
                >
                  Home
                </LinkHeader>
                <LinkHeader
                  mudaHeader={mudaHeader ? '1rem' : '1.2rem'}
                  to={'/sobre'}
                  onClick={HandleScroll}
                >
                  Sobre
                </LinkHeader>
                <LinkHeader
                  mudaHeader={mudaHeader ? '1rem' : '1.2rem'}
                  to={'/seja-um-revendedor'}
                  onClick={HandleScroll}
                >
                  Seja um Parceiro
                </LinkHeader>
                <LinkHeader
                  mudaHeader={mudaHeader ? '1rem' : '1.2rem'}
                  to={'/produtos'}
                  onClick={HandleScroll}
                >
                  Produtos
                </LinkHeader>
              </div>
            ) : (
              <MenuDeviceComponent
                mudaHeader={mudaHeader}
                colorMenu={colorMenu}
              />
            )}
          </div>
        </div>
      </Head>
    </>
  );
}
