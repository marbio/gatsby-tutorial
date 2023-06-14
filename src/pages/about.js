import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seodata";

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title='About' />;

export default AboutPage;
