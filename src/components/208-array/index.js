import React from "react";
import Exercicios from "./exercicios";

// Array simples.
const simpleArray = ["Artur", "Fernanda", "Célia", "Geovana"];

// Array com elementos diretos, (Quase nunca se usa)
const elementArray = [
  <li key="0"> Posição 0 </li>,
  <li key="1"> Posição 1 </li>,
  <li key="2"> Posição 2 </li>,
];

// Exemplo de Array de Objetos
const objectArray = [
  { nome: "A Game of Thrones", ano: 1996, bestSeller: true },
  { nome: "A Clash of Kings", ano: 1998, bestSeller: true },
  { nome: "A Storm of Swords", ano: 2000, bestSeller: false },
];

const Array208 = () => {
  return (
    <>
      <div>{simpleArray}</div>

      <hr />

      <div>{elementArray}</div>

      <hr />

      <div>
        {/* Map de Array, muito usado .. retorna uma lista do array que eu preciso */}
        <h3>Map de Array</h3>
        {simpleArray.map((nome) => (
          <li key={nome}>{nome}</li>
        ))}
      </div>

      <hr />

      <div>
        {/* Map de Array, muito usado ..Mais comum de ser usado*/}
        <h3>Map de Array de Objetos</h3>
        {objectArray.map((livro, index) => (
          <p key={index}>
            {" "}
            Livro: {livro.nome} de {livro.ano}{" "}
          </p>
        ))}
      </div>
      <hr />
      <div>
        {/* Map de Array com filter para filtrar só o que vai aparecer, muito usado ..Mais comum de ser usado*/}
        <h3>Map de Array de Objetos, com Filtro para livros Best Seller</h3>
        {objectArray
          .filter(({ bestSeller }) => bestSeller === true)
          .map((livro, index) => (
            <p key={index}>
              Livro: {livro.nome} de {livro.ano}{" "}
            </p>
          ))}
      </div>

      <hr />

      <Exercicios />
    </>
  );
};

export default Array208;
