import React from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const BotaoAtaque = ({ ataque, data, pokemon }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        key={ataque}
        style={{ width: "60%", margin: "3px" }}
      >
        {ataque}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="row">
            <h4 style={{ display: "inline" }}>
              {data[0] && data[0].dano && <>{data[0].dano}</>}
              {data[0] && data[0].basal && data[0].basal === "Especial" && (
                <>
                  {" "}
                  +{" "}
                  <span style={{ color: "red" }}>{pokemon.status.atq_esp}</span>
                </>
              )}
              {data[0] && data[0].basal && data[0].basal === "Físico" && (
                <>
                  {" "}
                  +{" "}
                  <span style={{ color: "red" }}>{pokemon.status.ataque}</span>
                </>
              )}
              {data[0] && pokemon.tipo.includes(data[0].tipo) && (
                <>
                  {" "}
                  +{" "}
                  <span style={{ color: "green" }}>
                    {pokemon.bonus_elemental}
                  </span>
                </>
              )}
            </h4>
          </div>
          <div className="row">
            <h5>
              <>{data[0] && data[0].basal !== null && <>{data[0].basal} |</>}</>
              <>{data[0] && <> {data[0].tipo}</>}</>
            </h5>
          </div>
          <div className="row">
            <span>{data[0] && data[0].descricao}</span>
            {data[0] && data[0].descritores && (
              <span style={{ fontStyle: "italic" }}>
                Descritores: {data[0].descritores}
              </span>
            )}
          </div>
          <div className="row">
            {data[0] && data[0].frequencia && (
              <span style={{ fontStyle: "italic" }}>
                Frequência: {data[0].frequencia}
              </span>
            )}
          </div>
          <div className="row">
            <h6>
              Alcance: {data[0] && data[0].alcance}
              <> | Acurácia: {data[0] && data[0].acuracia}</>
            </h6>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default BotaoAtaque;
