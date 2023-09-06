import { useParams } from 'react-router-dom'
import { getProdutoById } from './ListaProdutos'

export default function ExcluirProdutos() {
    document.title = 'Excluir Produtos'
    const { id } = useParams()
    const produto = getProdutoById(id)
    return (
        <>
            <main>
                <h1>EXCLUIR-PRODUTOS</h1>
                <p>Produto selecionado - {produto.nome}</p>
            </main>
        </>
    )
}