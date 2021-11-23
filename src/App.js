import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  //Colore se ativo ou inativo.
  function colorText() {
    return { color: dados.ativa ? "green" : "red" };
  }

  return (
    <div>
      <p> Nome: {dados.cliente}</p>
      <p>idade: {dados.idade}</p>

      <p>
        Status conta:{" "}
        <span style={colorText()}>{dados.ativa ? "Ativo" : "Inativo"} </span>
      </p>

      <p>
        Total:{" "}
        <span style={{ color: total < 10000 ? "green" : "red" }}>
          {" "}
          R$ {total}
        </span>
      </p>

      {total > 10000 ? (
        <p style={colorText()}>Você está gastando demais, controle-se </p>
      ) : (
        <p style={colorText()}>
          Você está controlando bem seus gastos, continue assim!
        </p>
      )}
    </div>
  );
};

export default App;
