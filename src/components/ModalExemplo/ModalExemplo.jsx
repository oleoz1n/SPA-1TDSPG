/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./ModalInserir.scss";

export default function ModalExemplo(props) {
  document.title = "CADASTRO";
  // eslint-disable-next-line no-unused-vars
  let novoId;
  useEffect(() => {
   if(!open){
    console.log('oi')
    fetch("http://localhost:5000/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        novoId = data[data.length - 1].id + 1;
      })
      .catch((error)=> console.log(error));
    }
  }, [open]);
  const [produto, setProduto] = useState({
    id: novoId,
    nome: "",
    preco: "",
    desc: "",
    img: ""
  }
  )

  const handleChange = (event)=>{
    const {name, value} = event.target
    setProduto({...produto, [name]:value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    fetch("http://localhost:5000/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto)
    })
    .then((response)=> {
      console.log(response)
      return response.json()
    })
    .then(data=>console.log(data))
    .catch(error => console.log(error))
    props.setOpen(false)
  }

  if (props.open) {
    return (
      <div className="container">
        <h1>Cadastrar Produto</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Novo Produto</legend>
              <div>
                <label htmlFor="nome">Nome:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="nome"
                  id="nome"
                  required
                />
                <label htmlFor="desc">Descrição</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="desc"
                  id="desc"
                  required
                />
                <label htmlFor="preco">Preço:</label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="preco"
                  id="preco"
                  required
                />
                <label htmlFor="img">Imagem:</label>
                  <input 
                  onChange={handleChange}
                  type="text" 
                  name="img"
                  id="img"
                  required
                  />
                <button>Cadastrar</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
