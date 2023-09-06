import { useParams } from "react-router-dom";
import { listaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {
  document.title = "Editar Produtos";

  const { id } = useParams();
  const prodRecuperadoPorId = listaProdutos.filter(
    (produto) => produto.id == id
  );
  const [produto, setProduto] = useState({
    id: prodRecuperadoPorId[0].id,
    nome: prodRecuperadoPorId[0].nome,
    preco: prodRecuperadoPorId[0].preco,
    desc: prodRecuperadoPorId[0].desc,
    img: prodRecuperadoPorId[0].img,
  });

  return (
    <>
      <main>
        <h1>Editar Produtos</h1>
        <form action="#" method="get">
          <fieldset>
            <legend>Editar Produto</legend>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                name="nome"
                id="nome"
                defaultValue={produto.nome}
              />
              <label htmlFor="desc">Descrição</label>
              <input
                type="text"
                name="desc"
                id="desc"
                defaultValue={produto.desc}
              />
              <label htmlFor="preco">Preço:</label>
              <input 
              type="number"
              name="preco"
              id="preco"
              defaultValue={produto.preco}
              />
              <button type="submit">Editar</button>
            </div>
          </fieldset>
        </form>
      </main>
    </>
  );
}
