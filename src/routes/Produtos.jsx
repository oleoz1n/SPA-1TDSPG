import { Link } from "react-router-dom";
import { listaProdutos } from "../components/ListaProdutos";
import styles from './Produtos.module.css'
import {
  AiOutlineEdit as EditarIcon,
  AiOutlineDelete as ExcluirIcon,
} from 'react-icons/ai'
export default function Produtos() {
    //Criando objeto para alterar os estilos pelo comando style do html
  return (
    <div>
      <h1>Produtos</h1>
      <table className={styles.tabelaProd}>
      <thead>
                        <tr>
                            <th className={styles.tabelaCabecalho}>ID</th>
                            <th className={styles.tabelaCabecalho}>NOME</th>
                            <th className={styles.tabelaCabecalho}>DESCRIÇÃO</th>
                            <th className={styles.tabelaCabecalho}>PREÇO</th>
                            <th className={styles.tabelaCabecalho}>IMG</th>
                            <th className={styles.tabelaCabecalho}>EDITAR/EXCLUIR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProdutos.map((produto, index) => (
                            <tr key={index} className={(produto.id % 2 == 0) ? `${styles.tabelaLinha} linhaCinza`: `${styles.tabelaLinha} linhaBranca`}>
                                {/* Adicionando estilo no comando style*/}
                                <td className={styles.tabelaDados}>{produto.id}</td>
                                <td className={styles.tabelaDados}>{produto.nome}</td>
                                <td className={styles.tabelaDados}>{produto.desc}</td>
                                <td className={styles.tabelaDados}>{produto.preco}</td>
                                <td className={styles.tabelaDados}>
                                    {/* Adicionando estilo no comando style*/}
                                    <img className={styles.tblImg} src={produto.img} alt={produto.desc} />
                                </td>
                                <td className={styles.tabelaDados}>
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
      </table>
    </div>
  );
}
