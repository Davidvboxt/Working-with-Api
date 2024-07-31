import React from "react";
import { AnimePopular, Header, Categories } from "../components";

export const Home = () => {
  return (
    <main>
      <Header />
      <Categories />  
      <AnimePopular />
    </main>
  );
};
