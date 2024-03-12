import React from "react";
import { FC } from "react";
import { Header } from "./src/components/Header";
import { BasketCard } from "./src/components/BasketCard";

const data = ["banana", "peaches", "orange"];

export const App: FC = function App() {
  const list = data.map((item) => <BasketCard key={item} title={item} />);

  return (
    <>
      <Header />
      <ul>{list}</ul>
    </>
  );
};
