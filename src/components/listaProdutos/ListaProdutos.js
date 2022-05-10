import React from 'react'
import {Link} from 'react-router-dom'

export default function ListaProdutos(props){
    const produtos = props.produtos || []

    return(
        <>
        <h1>Lista de produtos</h1>
        {
            produtos.map(item => {
                return(
                    <h3 key={item.id}>
                        {item.id} {item.nome} R${item.preco}
                        <Link to={'/produto/' + item.id}>Ir para produto</Link>
                    </h3>
                )
            })
        }
        </>
    )
}