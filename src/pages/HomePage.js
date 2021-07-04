import Header from '../components/Header';
import { data } from '../data/data';

export default function HomePage() {
  console.log(data[0]);
  return (
    <div
      style={{
        backgroundImage: 'url(/img/background_homePage.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        maxWidth: '900px',
        margin: 'auto',
        height: '400px',
        color: 'white',
      }}
    >
      <div>
        <img
          alt="logotipo"
          src="/img/logotipo.png"
          style={{
            maxWidth: '20%',
            marginLeft: '5%',
            marginTop: '1%',
          }}
        />
      </div>
    </div>
  );
}
