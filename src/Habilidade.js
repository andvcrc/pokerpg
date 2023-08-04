import React from "react";
import data from "./json/Habilidades.json";

const Habilidade = () => {
  const [habilidade, setHabilidade] = React.useState("");
  const [dataFilter, setDataFilter] = React.useState(null);

  function handleChange({ target }) {
    setHabilidade(target.value);
    setDataFilter(data.filter((element) => element.nome === target.value));
  }

  return (
    <div className="card" style={{ maxWidth: "36rem" }}>
      <div className="card-body">
        <h2 className="card-title">Habilidades</h2>
        <select
          id="habilidades"
          value={habilidade}
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
            {dataFilter[0].gatilho === true ? (
              <p>Gatilho: {dataFilter[0].frequencia}</p>
            ) : (
              <></>
            )}
            {dataFilter[0].ativacao === true ? (
              <p>Ativação: {dataFilter[0].frequencia}</p>
            ) : (
              <></>
            )}
            {!dataFilter[0].gatilho && !dataFilter[0].ativacao && (
              <p>Frequência: {dataFilter[0].frequencia}</p>
            )}
            <p>Efeito: {dataFilter[0].efeito}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Habilidade;
