import { Link } from "react-router-dom";
import { listaProdutos } from "../components/ListaProdutos";
import './Produtos.css'
import {
  AiOutlineEdit as EditarIcon,
  AiOutlineDelete as ExcluirIcon,
} from 'react-icons/ai'
export default function Produtos() {
  return (
    <div>
      <h1>Produtos</h1>
      <table className="fl-table">
      <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                            <th>IMG</th>
                            <th>EDITAR/EXCLUIR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProdutos.map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.desc}</td>
                                <td>{produto.preco}</td>
                                <td>
                                    <img src={produto.img} alt={produto.desc} />
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
      </table>
    </div>
  );
}
