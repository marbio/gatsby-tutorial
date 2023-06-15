import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seodata";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const postQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title='My Blog Posts'></Seo>;

export default BlogPage;
