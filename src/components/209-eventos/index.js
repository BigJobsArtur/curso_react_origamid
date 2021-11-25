import React from "react";

const Eventos209 = () => {
  function writeAlert(event) {
    alert(`comprou uma nova ${event.target.innerText}`);
  }

  return (
    <div>
      <h1>Eventos</h1>
      <p>
        Um evento no react funciona mais ou menos como quando colocamos um
        evento no html{" "}
      </p>

      <div>
        <button style={{ color: "white" }} onClick={writeAlert}>
          Camisa
        </button>
      </div>
      <div>
        <button style={{ color: "white" }} onClick={writeAlert}>
          Bermuda
        </button>
      </div>

      <hr />

      <p>
        Dá para simplificar a contrução da ação de um Event, nesse caso apenas
        vamos passar uma Arrow function no e escrever direto no evento o que
        queremos(ajuda no caso de funções menores)
      </p>

      <div>
        <button
          style={{ color: "white" }}
          onClick={(event) => alert(event.currentTarget.innerHTML)}
        >
          Clique Aqui
        </button>
      </div>

      <hr />

      <p>
        Eventos no window/document ou qualquer elemento fora do React, devem ser
        adicionados com JavaScript normalmente, usando o addEventListener.
      </p>

      <div></div>
    </div>
  );
};

export default Eventos209;
