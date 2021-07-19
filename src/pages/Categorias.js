import { useParams } from 'react-router-dom';
import { categorias } from '../data/data';
import {useState, useEffect} from 'react'
  
export default function Categorias() {
  let data = useParams();
  const [arrayCategoria, setArrayCategoria] = useState({})
  const [produtosOnly, setProdutosOnly] = useState(false)

  useEffect(() => {
    categorias.map(item => {
      if(item.name === data.name){
        if(item.produtos !== undefined){
          setProdutosOnly(!produtosOnly)
        }
        setArrayCategoria(item)
      }
    })
    console.log(arrayCategoria)
  }, [data])
  
  return (
    <div>
      {arrayCategoria.name}
      {produtosOnly ? arrayCategoria.produtos.map(item => <div>{item.name}</div>) : '' }
    </div>
  )
}
