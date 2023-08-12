import React from "react";
import Personagem from "./Personagem";
import data from "./json/PersonagensData.js";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Login = () => {
  const [login, setLogin] = React.useState(null);
  const [personagem, setPersonagem] = React.useState([]);
  const [password, setPassword] = React.useState(null);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    if(personagem.length !== 0) setShow(!show)
  }, [personagem])

  function handleChange() {
    setPersonagem(
      data.filter(
        (element) => element.login === login && element.senha === password
      )
    );
  }

  console.log('carregou')

  function handleLogin({ target }) {
    setLogin(target.value);
  }

  function handlePassword({ target }) {
    setPassword(target.value);
  }

  return (
    <div>
      {show && (
        <Form>
          <Form.Group className="mb-3" controlId="user">
            <Form.Label>Usuário</Form.Label>
            <Form.Control
              onChange={handleLogin}
              type="text"
              placeholder="Seu usuário."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              onChange={handlePassword}
              type="password"
              placeholder="********"
            />
          </Form.Group>
          <Button onClick={handleChange}>Entrar</Button>
        </Form>
      )}
      {personagem &&
        personagem !== null &&
        personagem !== undefined &&
        personagem.length !== 0 && <>
        <Personagem personagem={personagem} />
        </>}
    </div>
  );
};

export default Login;
