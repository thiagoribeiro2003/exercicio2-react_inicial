import { useState, useEffect, Route } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getProdutos() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products/");
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getProdutos();
  }, []);

  return (
    <>
      <header>
        <h1>Exercício 2</h1>
      </header>

      <section>
        {produtos.map(({ id, title, price, image }) => (
          <article>
            <div key={id}>
              <p>
                <img className="imagem" src={image} alt="" />
              </p>
              <h2 Navlink="">{title}</h2>
              <h2>R${price}</h2>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default App;
