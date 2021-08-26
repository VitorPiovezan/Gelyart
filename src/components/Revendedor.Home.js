import { Link } from 'react-router-dom';
import { HandleScroll } from '../configs/configs';

export default function RevendedorHome({ mudaScreen }) {
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: 'auto',
        }}
      >
        <img
          alt="frezer"
          src="/img/produtos/freezer-horizontal-gellyart-min.png"
          style={{
            maxWidth: `${mudaScreen ? '40%' : '70%'}`,
            marginLeft: `${mudaScreen ? '15%' : '15%'}`,
            marginBottom: `${mudaScreen ? '-23rem' : '-14rem'}`,
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: '#286198',
          width: '100%',
          height: `${mudaScreen ? '20rem' : '25rem'}`,
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: `${mudaScreen ? '' : '2rem'}`,
        }}
      >
        <div
          style={{
            width: '1200px',
            display: `${mudaScreen ? '' : 'flex'}`,
            justifyContent: `${mudaScreen ? '' : 'center'}`,
          }}
        >
          <div
            style={{
              width: '30%',
              marginLeft: `${mudaScreen ? '65%' : ''}`,
              marginTop: `${mudaScreen ? '4rem' : '13rem'}`,
              fontSize: `${mudaScreen ? '2rem' : '1.4rem'}`,
              color: '#fff',
              display: `${mudaScreen ? '' : 'flex'}`,
              alignItems: `${mudaScreen ? '' : 'center'}`,
              flexDirection: 'column',
            }}
          >
            <p style={{ marginBottom: '-0.1rem' }}>Seja um</p>
            <strong>Revendedor</strong>
            <Link to="/seja-um-revendedor" onClick={HandleScroll}>
              <button
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#fff',
                  padding: '0.6rem',
                  width: `${mudaScreen ? '50%' : '120%'}`,
                  borderRadius: '50px',
                  backgroundColor: '#fdc500',
                  marginTop: '1rem',
                  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Confira Já!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
