import { useParams } from 'react-router-dom';
import { categorias } from '../data/data';
import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
  
export default function Categorias({mudaScreen}) {
  let data = useParams();
  const [arrayCategoria, setArrayCategoria] = useState({})
  const [produtosOnly, setProdutosOnly] = useState(false)

  useEffect(() => {
    categorias.map(item => {
      if(item.link === data.name){
        if(item.produtos !== undefined){
          setProdutosOnly(true)
        }
        setArrayCategoria(item)
      }
    })
    console.log(arrayCategoria)
  }, [data])
  
  return (
    <>
      <Header
        colorheader={'rgba(31, 31, 60, 0.8)'}
        colorheaderPos={'rgba(31, 31, 60, 0.8)'}
        colorMenu={'rgb(31, 31, 60, 0.4)'}
        mudaScreen={mudaScreen}
      />
      <div style={{marginTop: '6rem'}}>
      {arrayCategoria.name}
      {produtosOnly ? arrayCategoria.produtos.map(item => <div>{item.name}</div>) : '' }
      </div>
      
      <div style={{height: '100rem'}}></div>
      <Footer mudaScreen={mudaScreen} />
    </>
  )
}
