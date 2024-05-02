function Pessoa({name, yearsOld, profession, picture}){
    return(
        <div>
            <img src={picture} alt={name}></img>
            <h2>Nome: {name}</h2>
            <p>Idade: {yearsOld}</p>
            <p>Profissão: {profession}</p>
        </div>
    )
}

export default Pessoa;