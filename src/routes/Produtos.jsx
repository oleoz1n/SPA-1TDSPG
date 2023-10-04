import { Link } from "react-router-dom";
import ModalExemplo from "../components/ModalExemplo/ModalExemplo";
import styles from './Produtos.module.css'
import { useState, useEffect } from "react";
import {
  AiOutlineEdit as EditarIcon,
  AiOutlineDelete as ExcluirIcon,
} from 'react-icons/ai'


export default function Produtos() {

    const [novaListaProdutos, setNovaListaProdutos] = useState([{}]);

    const [openModal, setOpenModal] = useState(false);

    useEffect(() =>{
        // Fetch = API do JS que faz requisições HTTP, ele usa como padrão o GET e retorna uma Promise com um url
        fetch('http://localhost:5000/produtos', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => setNovaListaProdutos(data)).catch(err => console.error(err))
    },[])


    const handleExcluir = (id)=>{
        fetch(`http://localhost:5000/produtos/${id}`,{
            method: 'DELETE',
            headers:{
                'content-type': 'application/json'
            },
        }).then(response => response.json())
        .catch(e=> console.log('Erro: '+e))

        window.location("/produtos");

        }
  return (
    <div>
        <ModalExemplo open={openModal} setOpen={setOpenModal} />
        <h1>Produtos</h1>
        <Link onClick={()=>setOpenModal(true)}>Adicionar Produto</Link>
      <table className={styles.tabelaProd}>
      <thead>
                        <tr className={styles.tabelaCabecalho}>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                            <th>IMG</th>
                            <th>EDITAR/EXCLUIR</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tabelaCorpo}>
                        {novaListaProdutos.map((produto, index) => (
                            <tr key={index}>
                                {/* Adicionando estilo no comando style*/}
                                <td >{produto.id}</td>
                                <td >{produto.nome}</td>
                                <td >{produto.desc}</td>
                                <td >{produto.preco}</td>
                                <td >
                                    {/* Adicionando estilo no comando style*/}
                                    <img className={styles.tblImg} src={produto.img} alt={produto.desc} />
                                </td>
                                <td>
                                    <Link to={`/editar/produto/${produto.id}`}>
                                        <EditarIcon />
                                    </Link>
                                    <span> / </span>
                                    <Link onClick={()=>handleExcluir(produto.id)}>
                                        <ExcluirIcon/>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="6">Total de Produtos: {novaListaProdutos.length}</td>
                        </tr>
                    </tfoot>
      </table>
    </div>
  );
}
