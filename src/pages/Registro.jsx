import React, { useState } from "react";
import { auth } from "../firebase";

const Registro = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");

  const enviarForm = (e) => {
    e.preventDefault()

    let user = {
        name: usuario, 
        email:email,
        senha:senha
    }

    console.log(user)

    try{
        const userCredencial = await auth.createUserWithEmailAndPassword(auth,user,email,user.senha)
        console.log(userCredencial)
    }
    catch(error){
        console.error(error)
    }
  };
  return (
    <div>
      <h1>Registrar</h1>
      <form onSubmit={enviarForm}>
        <input
          type="text"
          placeholder="Nome de usuário"
          required
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="passwoard"
          placeholder="Senha"
          required
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        <input
          type="passwoard"
          placeholder="Confirme a senha"
          required
          onChange={(e) => {
            setConfirmeSenha(e.target.value);
          }}
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
