import * as React from "react";
import Layout from "../components/layout";
import { SeoData } from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle='Homepage'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};
export default IndexPage;

export const Head = () => {
  <SeoData title='Homepage'></SeoData>;
};
