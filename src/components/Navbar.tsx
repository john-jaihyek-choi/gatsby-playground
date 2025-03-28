import { Link, useStaticQuery, graphql } from "gatsby";

interface SiteInfo {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

const Navbar = () => {
  const siteInfo: SiteInfo = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const { title, description } = siteInfo.site.siteMetadata;

  return (
    <nav>
      <h1>Test Nav</h1>
      <p>{title}</p>
      <p>{description}</p>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};
export default Navbar;
