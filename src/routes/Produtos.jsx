import { Link } from "react-router-dom";
import { listaProdutos } from "../components/ListaProdutos";
import './Produtos.css'
import {
  AiOutlineEdit as EditarIcon,
  AiOutlineDelete as ExcluirIcon,
} from 'react-icons/ai'
export default function Produtos() {
    //Criando objeto para alterar os estilos pelo comando style do html
    const estiloCelulas = {
        width: '10%',
        textAlign: 'left',
        fontWeight: 'bold'
    }

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
                            <tr key={index} className={(produto.id % 2 == 0) ? "linhaCinza": "linhaBranca"}>
                                {/* Adicionando estilo no comando style*/}
                                <td style={estiloCelulas }>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.desc}</td>
                                <td>{produto.preco}</td>
                                <td>
                                    {/* Adicionando estilo no comando style*/}
                                    <img style={{width: "100px"}} src={produto.img} alt={produto.desc} />
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
