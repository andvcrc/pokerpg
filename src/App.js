import React from "react";
import Ataques from "./Ataques.js";
import Habilidade from "./Habilidade";
import "./css/App.css";
import Personagem from "./Personagem.js";

function App() {
  return (
    <>
      <section
        className="container text-center"
        style={{
          width: "100vw",
          height: "100vh",
          margin: "0px",
          padding: "0px",
        }}
      >
        <div
          className="bg-dark text-white"
          style={{
            width: "100vw",
            height: "100vh",
            margin: "0px",
            padding: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="row"
            style={{
              alignItems: "center",
              justifyContent: "space-around",
              height: "100vh",
              width: "90%",
              margin: "0px",
              padding: "0px",
            }}
          >
            <Ataques />
            <Habilidade />
            <Personagem />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
