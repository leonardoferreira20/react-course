import React, { use, useState } from "react";
import "./MyForm.css";

const MyForm = (props) => {
  const { user } = props;

  // 6 - Controlled inputs

  // 3 - Gestão de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "");

  // 3.1 - Opção de função
  // 3.1.1 - Função normal
  const handleName = function (event) {
    setName(event.target.value);
  };

  // 3.1.2 - Função - (Arrow function)
  /* const handleName = (event) => {
    setName(event.targe.value);
  }; */

  const handleSubmit = (event) => {
    event.preventDefault(); // Não recarrega a página após um submit para não estragar a experiência de utilizador

    console.warn(name, email, bio, role);

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* Envio do formulário */}

      {/* 1 - Criação de Forms */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Write your name" onChange={handleName} value={name} />
          {/* O nome dado no atributo 'name' tem que ser igual ao nome dado no atributo 'htmlFor' */}
        </div>

        {/* 2 - Label envolvendo input */}
        <label>
          <span>Email</span>
          {/* 4 - Simplificação da manipulação de dados */}
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Write your email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        {/* 8 - Textarea */}
        <label>
          <span>Description</span>
          <textarea
            name="bio"
            placeholder="User description"
            onChange={(event) => setBio(event.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* 9 - Select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(event) => setRole(event.target.value)} value={role}>
            <option value="user">Utilizador</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default MyForm;
