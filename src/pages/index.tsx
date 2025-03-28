import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/Layouts";
import { graphql } from "gatsby";

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;

interface DataType {
  site: {
    siteMetadata: {
      description: string;
      title: string;
    };
  };
}

interface HomeProps extends PageProps {
  data: DataType;
}

const Home: React.FC<HomeProps> = ({ data, path }: HomeProps) => {
  console.log(data, path);
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <p>Pikachu</p>
      <p>{title}</p>
      <p>{description}</p>
      <img src="/pikachu.png" alt="pikachu.png" />
    </Layout>
  );
};

export default Home;
