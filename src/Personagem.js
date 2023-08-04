import React from 'react'
import data from './json/Personagens.json'
import Pokemon from './Pokemon';

const Personagem = () => {
    const [personagem, setPersonagem] = React.useState("");
    const [dataFilter, setDataFilter] = React.useState(null);

    function handleChange({ target }) {
        setPersonagem(target.value);
        setDataFilter(data.filter((element) => element.nome === target.value));
    }

    return (
        <div className="card" style={{ maxWidth: "36rem" }}>
            <div className="card-body">
                <h2 className="card-title">Personagem</h2>
                <select
                    id="personagem"
                    value={personagem}
                    onChange={handleChange}
                    style={{ width: "200px" }}
                >
                    <option value="" disabled>
                        Selecione
                    </option>
                    {data.map((el) => {
                        return (
                            <option key={el.nome} value={el.nome}>
                                {el.nome}
                            </option>
                        );
                    })}
                </select>
                {dataFilter && (
                    <>
                        <p>Nome: {dataFilter[0].nome}</p>
                        <p>Nível: {dataFilter[0].nivel}</p>
                        <p>Classe: {dataFilter[0].classe.map(el => {
                            return (<> {el}</>)
                        })}</p>
                        <p style={{"textAlign": "justify"}}>Talentos: {dataFilter[0].talentos.map(el => {
                            return (<> ({el}) {/*Fazer um botão que compara o el com a lista de talentos e retorna o efeito quando clicar em um alert*/}</>)
                        })}</p>

                        <><h3>POKEMONS</h3>{dataFilter[0].pokemons.map(el => {
                            return (<><Pokemon pokemon={el}/></>)
                        })}</>


                    </>
                )}
            </div>
        </div>
    );
}

export default Personagem
