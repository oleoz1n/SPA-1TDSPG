import { useNavigate, useParams } from 'react-router-dom'
import { listaProdutos } from "../components/ListaProdutos";

export default function ExcluirProdutos() {
    document.title = 'Excluir Produtos'
    const { id } = useParams()
    const produto = listaProdutos.filter(item => item.id == id)[0];
    const navigate = useNavigate();

    const handleDelete = () => {
        let indice;
        listaProdutos.forEach((item, index)=>{
            if(item.id == produto.id){
                indice = index
            }
        })
        listaProdutos.splice(indice,1)
        alert("O produto foi excluido com sucesso")
        navigate('/produtos')

    }
    return (
        <>
            <main>
                <h1>EXCLUIR-PRODUTOS</h1>
                <div>
                <h2>Produto selecionado - <span style={{color:'red'}}>{produto.nome}</span></h2>
                <button onClick={handleDelete}>Excluir</button>
                <button onClick={()=>navigate('/produtos')}>Cancelar</button>
                </div>
            </main>
        </>
    )
}