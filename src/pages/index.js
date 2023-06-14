import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seodata";

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt='Porsche 911 RS' src='../static/images/rs.jpg' />
    </Layout>
  );
};

export const Head = () => <Seo title='Homepage' />;

export default IndexPage;
