import { Button, Collapse } from "react-bootstrap";
import React from "react";
import data from "./json/Capacidades.json";

const Capacidades = ({ caracteristicas }) => {
  const [open, setOpen] = React.useState(false);
  const caracteristica = data.filter((el) => el.nome === caracteristicas);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        className="btn btn-secondary"
        onClick={() => setOpen(!open)}
        key={caracteristica[0].nome}
        style={{ width: "90%", margin: "3px", backgroundColor:"#1E5128" }}
      >
        {caracteristica[0].nome}
      </Button>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <p style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold" }}>Descrição: </span>
            {caracteristica[0].descricao}
          </p>
        </div>
      </Collapse>
    </div>
  );
};

export default Capacidades;
