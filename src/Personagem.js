import React from "react";
import data from "./json/Personagens.json";
import Pokemon from "./Pokemon";
import Select from "react-select";

const Personagem = () => {
  const [personagem, setPersonagem] = React.useState("");
  const [dataFilter, setDataFilter] = React.useState(null);
  const [poke, setPoke] = React.useState(null);

  function handleChange({ target }) {
    setPersonagem(target.value);
    setDataFilter(data.filter((element) => element.nome === target.value));
  }

  function handlePokemon({target}) {
    setPoke(dataFilter[0].pokemons.filter((el) => el.nome === target.value));
  }


  return (
    <div className="card" style={{ maxWidth: "36rem", backgroundColor:"#212121", color:"white", marginTop:"20px", marginBottom:"20px" }}>
      <div className="card-body">
        <h5 className="card-title">Personagem:</h5>
        <select
          id="personagem"
          value={personagem}
          onChange={handleChange}
          style={{ width: "200px", backgroundColor:"#212121", color:"white" }}
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
            <h2 style={{ marginTop: "20px" }}>{dataFilter[0].nome}</h2>
            <h6>Nível: {dataFilter[0].nivel}</h6>
            <h6>
              Classe(s):{" "}
              {dataFilter[0].classe.map((el) => {
                return <span key={el}> {el}</span>;
              })}
            </h6>
            <p style={{ textAlign: "justify", marginTop: "20px" }}>
              Talentos:{" "}
              {dataFilter[0].talentos.map((el) => {
                return (
                  <span>
                    {" "}
                    ({el}){" "}
                    {/*Fazer um botão que compara o el com a lista de talentos e retorna o efeito quando clicar em um alert*/}
                  </span>
                );
              })}
            </p>
            <>
              <h3>POKEMONS</h3>
              <select
                id="poke"
                value={poke !== null ? poke.nome : ""}
                onChange={handlePokemon}
                style={{ width: "200px", marginTop: "25px", backgroundColor:"#212121", color:"white" }}
              >
                <option value="" disabled>
                  Selecione
                </option>
                {dataFilter[0].pokemons.map((el) => {
                  return (
                    <>
                    <option key={el.nome} label={el.nome} value={el.nome}>
                    </option>
                    </>
                  );
                })}
              </select>

              <div style={{ marginTop: "30px" }}>
                {poke !== null && <Pokemon pokemon={poke[0]} />}
              </div>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Personagem;
