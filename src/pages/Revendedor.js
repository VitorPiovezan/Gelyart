import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '../styles/Styled.Home';
import { Link } from 'react-router-dom';
import {
  InputLong,
  LabelLong,
  LabelShort,
  InputShort,
} from '../styles/Styled.Revendedor';
export default function Revendedor({ mudaScreen }) {
  const [linkWhats, setLinkWhats] = useState('');
  const [name, setName] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setLinkWhats(
      'https://api.whatsapp.com/send?phone=5516996163774&text=Olá,%20meu%20nome%20é%20*' +
        name +
        '*,%20tenho%20interesse%20em%20ser%20revendedor!%20Segue%20os%20Dados:%0a%0a*Nome:*%20' +
        name +
        '%0a*Empresa:*%20' +
        empresa +
        '%0a*Cidade:*%20' +
        cidade +
        '%0a*Estado:*%20' +
        estado +
        '%0a*E-Mail:*%20' +
        email
    );
  }, [name, empresa, cidade, estado, email]);

  function verifica() {
    if (name === '') {
      alert('Insira um E-mail');
    } else if (empresa === '') {
      alert('Insira um Nome');
    } else if (cidade === '') {
      alert('Insira um Sexo');
    } else if (estado === '') {
      alert('Insira um celular');
    } else if (email === '') {
      alert('Insira o Nome do Pet');
    } else {
      alert('Você será redirecionado para o whatsapp');
      window.open(linkWhats, '_blank');
    }
  }
  return (
    <Container>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          alt="background"
          src={
            mudaScreen
              ? '/img/banners/revendedor_banner_new.png'
              : '/img/banners/revendedor_banner_mobile_new.png'
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
        className="content-revend"
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          textAlign: 'center',
          maxWidth: '1000px',
          paddingBottom: '50px',
        }}
      >
        <h1
          style={{
            color: '#2b6199',
            fontSize: `${mudaScreen ? '2.8rem' : '1.9rem'}`,
          }}
        >
          Trabalhe conosco
        </h1>
        <div
          className="form"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <LabelLong acao={mudaScreen ? '50%' : '90%'}>
            <p style={{ fontSize: '0.9rem' }}>Nome Completo</p>
            <InputLong
              acao={mudaScreen ? '100%' : '95%'}
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </LabelLong>

          <LabelLong acao={mudaScreen ? '50%' : '90%'}>
            <p style={{ fontSize: '0.9rem' }}>Nome da Empresa</p>
            <InputLong
              acao={mudaScreen ? '100%' : '95%'}
              type="text"
              placeholder="Digite seu negócio"
              value={empresa}
              onChange={e => setEmpresa(e.target.value)}
            />
          </LabelLong>

          <LabelShort
            acao={mudaScreen ? '50%' : '90%'}
            acao2={mudaScreen ? 'row' : 'column'}
          >
            <div
              className="short"
              style={{ width: `${mudaScreen ? '60%' : '95%'}` }}
            >
              <p style={{ fontSize: '0.9rem' }}>Cidade</p>
              <InputShort
                acao={mudaScreen ? '80%' : '100%'}
                type="text"
                placeholder="Cidade"
                value={cidade}
                onChange={e => setCidade(e.target.value)}
              />
            </div>
            <div
              className="short"
              style={{ width: `${mudaScreen ? '60%' : '95%'}` }}
            >
              <p style={{ fontSize: '0.9rem' }}>Estado</p>
              <InputShort
                acao={'100%'}
                type="text"
                placeholder="Estado"
                value={estado}
                onChange={e => setEstado(e.target.value)}
              />
            </div>
          </LabelShort>

          <LabelLong acao={mudaScreen ? '50%' : '90%'}>
            <p style={{ fontSize: '0.9rem' }}>E-mail</p>
            <InputLong
              acao={mudaScreen ? '100%' : '95%'}
              type="text"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </LabelLong>

          <Link onClick={verifica}>
            <button
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#fff',
                padding: '0.6rem',
                width: '120%',
                borderRadius: '50px',
                backgroundColor: '#2b6199',
                marginTop: '2.2rem',
                boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              WhatsApp
            </button>
          </Link>

          <div className="input-short">
            <label className="short"></label>
            <label className="short"></label>
          </div>
        </div>
      </div>

      <Footer mudaScreen={mudaScreen} />
    </Container>
  );
}
