import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/Layouts";
import { graphql } from "gatsby";
import {
  StaticImage,
  getImage,
  IGatsbyImageData,
  GatsbyImage,
} from "gatsby-plugin-image";

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
    }
  }
`;

interface ImageNode {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface DataType {
  site: {
    siteMetadata: {
      description: string;
      title: string;
    };
  };
  images: {
    nodes: ImageNode[];
  };
  extensions: {};
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
      {data.images.nodes.map((imgfile, index) => {
        const img = getImage(imgfile.childImageSharp);

        if (!img) return null;

        return (
          <GatsbyImage
            key={index}
            image={img!}
            alt={`imgfile-${index}`}
          ></GatsbyImage>
        );
      })}
    </Layout>
  );
};

export default Home;
