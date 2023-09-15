import { useNavigate, useParams } from "react-router-dom";
import { listaProdutos } from "../components/LlistaProdutos";
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

  const navigate = useNavigate();

  const handleChange = (event) => {
    //Destructuring
    const { name, value } = event.target;
    // Inserir os dados no objeto produto através do setProduto({...})
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    indice = listaProdutos.forEach((item, index)=>{
      if(item.id == produto.id){
        indice = index
      }
    })
      listaProdutos.splice(indice,1,produto)
      navigate("/produtos");
  }
  return (
    <>
      <main>
        <h1>Editar Produtos</h1>
        <form action="#" method="get" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Editar Produto</legend>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                onChange={handleChange}
                type="text"
                name="nome"
                id="nome"
                value={produto.nome}
              />
              <label htmlFor="desc">Descrição</label>
              <input
                onChange={handleChange}
                type="text"
                name="desc"
                id="desc"
                value={produto.desc}
              />
              <label htmlFor="preco">Preço:</label>
              <input
                onChange={handleChange}
                type="number"
                name="preco"
                id="preco"
                value={produto.preco}
              />
              <button type="submit">Editar</button>
            </div>
          </fieldset>
        </form>
        <div>
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.preco}</p>
          <p>Desc: {produto.desc}</p>
        </div>
      </main>
    </>
  );
}
