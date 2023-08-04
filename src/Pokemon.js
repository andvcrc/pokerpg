import React from "react";

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <h4>{pokemon.nome}</h4>
      <div className="row" style={{ justifyContent: "center" }}>
      <>Nature: {pokemon.nature}</>
      <> | Tipo: {pokemon.tipo}</>
      <> | Nível: {pokemon.nivel}</>
      </div>
      <> {pokemon.pontos_de_vida}</>
      <div className="row" style={{ justifyContent: "center" }}>
        <h4>Atributos</h4>
        <>Saúde: {pokemon.status.saude}</>
        <> | Ataque: {pokemon.status.ataque}</>
        <> | Defesa: {pokemon.status.defesa}</>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <>Ataque Especial: {pokemon.status.atq_esp}</>
        <> | Defesa Especial: {pokemon.status.def_esp}</>
        <> | Velocidade: {pokemon.status.velocidade}</>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <h4>Evasões</h4>
        <>Física: {pokemon.evasao.fisica}</>
        <> | Especial: {pokemon.evasao.especial}</>
        <> | Veloz: {pokemon.evasao.veloz}</>
      </div>
      <> {pokemon.bonus_elemental}</>
      <p>
        Ataques:{" "}
        {pokemon.ataques.map((el) => {
          return <> {el}</>;
        })}
      </p>
      <p>
        {" "}
        Habilidades:{" "}
        {pokemon.habilidades.map((el) => {
          return <> {el}</>;
        })}
      </p>
    </>
  );
};

export default Pokemon;
