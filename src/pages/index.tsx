import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "./components/Layouts";

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>Pikachu</div>
      <img src="/pikachu.png" alt="pikachu.png" />
    </Layout>
  );
};

export default Home;
