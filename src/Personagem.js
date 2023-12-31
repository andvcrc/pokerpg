import React from "react";
import Pokemon from "./Pokemon";
import BotaoTalento from "./BotaoTalento.js";
import Form from "react-bootstrap/Form";

const Personagem = ({ personagem }) => {
  const [poke, setPoke] = React.useState(null);

  function handlePokemon({ target }) {
    setPoke(personagem[0].pokemons.filter((el) => el.nome === target.value));
  }

  return (
    <div
      className="card"
      style={{
        backgroundColor: "#121212",
        color: "white",
        marginTop: "20px",
        marginBottom: "20px",
        width: "30rem",
      }}
    >
      <div className="card-body">
        {personagem && (
          <h1 style={{ marginTop: "20px", fontWeight: "bold" }}>
            {personagem[0].nome}
          </h1>
        )}
        {personagem && (
          <>
            <div className="row" style={{ height: "500px", marginTop: "20px" }}>
              <img
                src={personagem[0].imagem}
                width={"100%"}
                height={"100%"}
                alt={personagem[0].nome}
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

            <h6 style={{ marginTop: "20px" }}>Nível: {personagem[0].nivel}</h6>
            <h6>
              Classe(s):{" "}
              {personagem[0].classe.map((el) => {
                return <span key={el}> {el}</span>;
              })}
            </h6>

            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              <span>Saúde: {personagem[0].status.saude}</span>
              <span>Ataque: {personagem[0].status.ataque}</span>
              <span>Defesa: {personagem[0].status.defesa}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span>Atk. Esp.: {personagem[0].status.ataque_especial}</span>
              <span>Def. Esp.: {personagem[0].status.defesa_especial}</span>
              <span>Velocidade: {personagem[0].status.velocidade}</span>
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h3>Talentos: </h3>
              {personagem[0].talentos.map((el) => {
                return (
                  <>
                    <BotaoTalento talento={el} />
                  </>
                );
              })}
            </div>

            <>
              <h2 style={{ margin: "50px" }}>POKEMONS</h2>
              <div
                className="row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Form.Select
                  id="poke"
                  value={poke !== null ? poke.nome : ""}
                  onChange={handlePokemon}
                  style={{
                    width: "300px",
                    marginTop: "25px",
                    backgroundColor: "#121212",
                    color: "white",
                  }}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {personagem[0].pokemons.map((el) => {
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
                </Form.Select>
              </div>

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
