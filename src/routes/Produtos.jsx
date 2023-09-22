import { Link } from "react-router-dom";
import { listaProdutos } from "../components/ListaProdutos";
import styles from './Produtos.module.css'
import { useState, useEffect } from "react";
import {
  AiOutlineEdit as EditarIcon,
  AiOutlineDelete as ExcluirIcon,
} from 'react-icons/ai'


export default function Produtos() {

    const [novaListaProdutos, setNovaListaProsutos] = useState([{}]);


    useEffect(() =>{
        //useEffect que renderiza apenas uma vez
        setNovaListaProsutos(listaProdutos)
    },[ ])
  return (
    <div>
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
                                    <Link to={`/excluir/produto/${produto.id}`}>
                                        <ExcluirIcon />
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
