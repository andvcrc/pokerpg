import React from "react";
import { Button, Collapse } from "react-bootstrap";

const BotaoHabilidade = ({ habilidade }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBottom:"5px"}}>
      <Button
        className="btn btn-secondary"
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
              <p style={{ textAlign: "center" }}>
                <span style={{fontWeight:"bold"}}>Gatilho: </span>{habilidade[0].frequencia}
              </p>
            ) : (
              <p style={{ textAlign: "center" }}>
                <span style={{fontWeight:"bold"}}>Frequência: </span> {habilidade[0].frequencia}
              </p>
            )}
          </div>

          <div className="row">
            <p style={{ textAlign: "center" }}>
            <span style={{fontWeight:"bold"}}>Efeito: </span> {habilidade[0].efeito}
            </p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default BotaoHabilidade;
