import { useState, useEffect, Route } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

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
      <BrowserRouter>
        <header>
          <h1>Exercício 2</h1>
        </header>

        <section>
          {produtos.map(({ id, title, price, image }) => (
            <article key={id}>
              <p>
                <img className="imagem" src={image} alt="" />
              </p>
              <h2>
                <Link to={"/"}> {title} </Link>
              </h2>
              <h2>{price}</h2>
            </article>
          ))}
        </section>
      </BrowserRouter>
    </>
  );
};

export default App;
