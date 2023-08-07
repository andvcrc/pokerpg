import React from "react";
import { Button, Collapse } from "react-bootstrap";
import data from "./json/Talentos.js";

const BotaoTalento = (talento) => {
  const [open, setOpen] = React.useState(false);
  console.log(talento.talento);
  const talentoData = data.filter((el) => el.nome === talento.talento);
  console.log(talentoData[0] && talentoData[0].nome);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5px",
      }}
    >
      <Button
        className="btn btn-secondary"
        onClick={() => setOpen(!open)}
        style={{ margin: "3px", width: "90%" }}
      >
        {talentoData[0].nome}
      </Button>
      <Collapse in={open}>
        <div
          className="row"
        >
          <p>
            <span style={{ fontWeight: "bold" }}>Efeito: </span>
            {talentoData[0].efeito}
          </p>
          {talentoData[0].gatilho !== null ? (
            <>
              <p>
                <span style={{ fontWeight: "bold" }}>Freqência: </span>
                {talentoData[0].frequencia}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Gatilho: </span>
                {talentoData[0].gatilho}
              </p>
            </>
          ) : (
            <p>
              <span style={{ fontWeight: "bold" }}>Frequência: </span>
              {talentoData[0].frequencia}
            </p>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export default BotaoTalento;
