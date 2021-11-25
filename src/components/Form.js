import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  InputLong,
  LabelLong,
  LabelShort,
  InputShort,
  ImputLongTextArea,
} from '../styles/Styled.Revendedor.js';
import AOS from 'aos';
export default function Revendedor({ mudaScreen }) {
  const [linkWhats, setLinkWhats] = useState('');
  const [name, setName] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  useEffect(() => {
    setLinkWhats(
      'https://api.whatsapp.com/send?phone=5516997662393&text=Olá,%20meu%20nome%20é%20*' +
        name +
        '*,%20tenho%20interesse%20em%20ser%20revendedor!%20Segue%20os%20Dados:%0a%0a*Nome:*%20' +
        name +
        '%0a*Cidade:*%20' +
        cidade +
        '%0a*Estado:*%20' +
        estado +
        '%0a*E-Mail:*%20' +
        email +
        '%0a%0a' +
        mensagem
    );
  }, [name, cidade, estado, email, mensagem]);

  function verifica() {
    if (name === '') {
      alert('Insira um Nome');
    } else if (cidade === '') {
      alert('Insira uma cidade');
    } else if (estado === '') {
      alert('Insira um estado');
    } else if (email === '') {
      alert('Insira o E-mail');
    } else if (mensagem === '') {
      alert('Insira uma mensagem');
    } else {
      alert('Você será redirecionado para o whatsapp');
      window.open(linkWhats, '_blank');
    }
  }
  return (
    <div
      data-aos="fade-down"
      className="content-revend"
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        marginTop: '20px',
        textAlign: 'center',
        maxWidth: '600px',
        paddingBottom: '50px',
      }}
    >
      <h1
        style={{
          color: '#2b6199',
          fontSize: `${mudaScreen ? '2.8rem' : '1.9rem'}`,
        }}
      >
        Fale conosco
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

        <LabelLong acao={mudaScreen ? '50%' : '90%'}>
          <p style={{ fontSize: '0.9rem' }}>Mensagem</p>
          <ImputLongTextArea
            style={{
              height: '100px',
            }}
            acao={mudaScreen ? '100%' : '95%'}
            type="textbox"
            placeholder="Sua mensagem"
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
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
            Enviar
          </button>
        </Link>

        <div className="input-short">
          <label className="short"></label>
          <label className="short"></label>
        </div>
      </div>
    </div>
  );
}
