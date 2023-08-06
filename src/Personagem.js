import React from "react";
import data from "./json/PersonagensData.js";
import Pokemon from "./Pokemon";

const Personagem = () => {
  const [personagem, setPersonagem] = React.useState("");
  const [dataFilter, setDataFilter] = React.useState(null);
  const [poke, setPoke] = React.useState(null);

  function handleChange({ target }) {
    setPoke(null);
    setPersonagem(target.value);
    setDataFilter(data.filter((element) => element.nome === target.value));
  }

  function handlePokemon({ target }) {
    setPoke(dataFilter[0].pokemons.filter((el) => el.nome === target.value));
  }

  return (
    <div
      className="card"
      style={{
        maxWidth: "36rem",
        backgroundColor: "#121212",
        color: "white",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">Personagem:</h5>
        <select
          id="personagem"
          value={personagem}
          onChange={handleChange}
          style={{ width: "200px", backgroundColor: "#212121", color: "white" }}
        >
          <option value="" disabled>
            Selecione
          </option>
          {data.map((el) => {
            return (
              <option key={el.id} value={el.nome}>
                {el.nome}
              </option>
            );
          })}
        </select>

        {dataFilter && (
          <>
            <div className="row" style={{ height: "500px", marginTop: "20px" }}>
              <img
                src={dataFilter[0].imagem}
                width={"100%"}
                height={"100%"}
                alt="Feist_Falcone"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

            <h2 style={{ marginTop: "20px" }}>{dataFilter[0].nome}</h2>
            <h6>Nível: {dataFilter[0].nivel}</h6>
            <h6>
              Classe(s):{" "}
              {dataFilter[0].classe.map((el) => {
                return <span key={el}> {el}</span>;
              })}
            </h6>
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Talentos:{" "}
              {dataFilter[0].talentos.map((el) => {
                return (
                  <span>
                    {" "}
                    ({el}){" "}
                    {/*Fazer um botão que compara o el com a lista de talentos e retorna o efeito quando clicar em um collapse*/}
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
                style={{
                  width: "200px",
                  marginTop: "25px",
                  backgroundColor: "#121212",
                  color: "white",
                }}
              >
                <option value="" disabled>
                  Selecione
                </option>
                {dataFilter[0].pokemons.map((el) => {
                  return (
                    <>
                      <option
                        key={el.id}
                        label={el.nome}
                        value={el.nome}
                      ></option>
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
