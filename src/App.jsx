import { useState, useEffect } from "react";
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
    <div>
      {produtos.map(({ id, title, price }) => (
        <section key={id}>
          {id}
          {title}
          {price}
        </section>
      ))}
    </div>
  );
};
k;
export default App;
