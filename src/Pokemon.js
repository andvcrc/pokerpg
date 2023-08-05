import React from "react";
import BotaoAtaque from "./BotaoAtaque";
import ataqueData from "./json/Ataques.json";
import BotaoHabilidade from "./BotaoHabilidade";
import habilidadesData from "./json/Habilidades.json";

const Pokemon = ({ pokemon }) => {


  const [imagem, setImagem] = React.useState(null)

  async function imageSet() {
    const responseDados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.nome.toLowerCase()}`)
    const json = await responseDados.json()
    setImagem(json)
  }

  imageSet();

  if (pokemon === "") return;
  return (
    <>
      <h1>{pokemon.nome}</h1>
      <div className="row" style={{ justifyContent: "center", marginTop: "20px"  }}>
        <>Nature: {pokemon.nature}</>
        <> | Tipo: {pokemon.tipo.map(el => <>{el} </>)}</>
        <> | Nível: {pokemon.nivel}</>
      </div>

      {imagem && <img src={imagem.sprites.other.home.front_default} alt='img' width={'475px'} height={'475px'} />}

      <h4>Pontos de Vida: {pokemon.pontos_de_vida}</h4>
      <div className="row" style={{ justifyContent: "center", marginTop: "20px"  }}>
        <h4>Atributos</h4>
        <>Saúde: {pokemon.status.saude}</>
        <> | Ataque: {pokemon.status.ataque}</>
        <> | Defesa: {pokemon.status.defesa}</>
      </div>
      <div className="row" style={{ justifyContent: "center", marginTop: "20px"  }}>
        <>Ataque Especial: {pokemon.status.atq_esp}</>
        <> | Defesa Especial: {pokemon.status.def_esp}</>
        <> | Velocidade: {pokemon.status.velocidade}</>
      </div>
      <div className="row" style={{ justifyContent: "center", marginTop: "20px" }}>
        <h4>Evasões</h4>
        <>Física: {pokemon.evasao.fisica}</>
        <> | Especial: {pokemon.evasao.especial}</>
        <> | Veloz: {pokemon.evasao.veloz}</>
      </div>
      <>Bônus Elemental: {parseInt(pokemon.nivel/5)}</>

      <div className="row" style={{ marginTop: "20px" }}>
        <h4>Habilidades</h4>
        <>
          {pokemon.habilidades.map((el) => {
            const data = habilidadesData.filter(
              (element) => element.nome === el
            );
            return <BotaoHabilidade habilidade={data} key={el} />;
          })}
        </>
      </div>

      <div className="row" style={{ marginTop: "10px" }}>
        <h4 style={{ marginBottom: "20px" }}>Ataques</h4>
        {pokemon.ataques.map((el) => {
          const data = ataqueData.filter((element) => element.nome === el);
          return (
            <BotaoAtaque ataque={el} data={data} pokemon={pokemon} key={el} />
          );
        })}
      </div>
    </>
  );
};

export default Pokemon;
