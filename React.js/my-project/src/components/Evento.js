function Evento({number}){
    function meuEvento(){
        console.log(`Fui ativado! ${number}`);
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento;