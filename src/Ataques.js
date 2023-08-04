import React from "react";
import data from "./json/Ataques.json";

const Ataques = () => {
  const [ataque, setAtaque] = React.useState("");
  const [dataFilter, setDataFilter] = React.useState(null);

  function handleChange({ target }) {
    setAtaque(target.value);
    setDataFilter(data.filter((element) => element.nome === target.value));
  }

  return (
    <div className="card" style={{ maxWidth: "36rem" }}>
      <div className="card-body">
        <h2 className="card-title">Ataques</h2>
        <select id="ataques" value={ataque} onChange={handleChange}>
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
            <h3 style={{"padding": "15px"}}>Dano: {dataFilter[0].dano}</h3>
            <p>{dataFilter[0].descricao}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Ataques;
