import React from "react";
import Personagem from "./Personagem.js";

function App() {
  return (
    <>
      <section
        className="container text-center"
        style={{
          minHeight: "100vh",
          maxWidth: "100vw",
          margin: "0px",
          padding: "0px",
        }}
      >
        <div

          style={{
            backgroundColor:"#121212",
            maxWidth: "100vw",
            minHeight: "100vh",
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
              maxWidth: "90%",
              margin: "0px",
              padding: "0px",
            }}
          >
            <Personagem />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
