import Item from "./Item";

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="ferrari" ano_lancamento={1982}/>
                <Item marca="fiat" ano_lancamento={1968}/>
                <Item marca="Volvo" ano_lancamento={2003}/>
                <Item marca="Chevrolet"/>
            </ul>
        </>
    )
}

export default List;