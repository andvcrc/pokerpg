import React from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const BotaoHabilidade = ({ habilidade }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBottom:"5px"}}>
      <Button
        onClick={() => setOpen(!open)}
        key={habilidade}
        style={{ width: "90%", margin: "3px" }}
      >
        {habilidade[0].nome}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="row">
            <h4>{habilidade[0].nome}</h4>
          </div>

          <div className="row">
            {habilidade[0].gatilho !== false ? (
              <span style={{ textAlign: "center" }}>
                Gatilho: {habilidade[0].frequencia}
              </span>
            ) : (
              <h6 style={{ textAlign: "center" }}>
                Frequência: {habilidade[0].frequencia}
              </h6>
            )}
          </div>

          <div className="row"></div>

          <div className="row" style={{ textAlign: "justify" }}>
            Efeito: {habilidade[0].efeito}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default BotaoHabilidade;
