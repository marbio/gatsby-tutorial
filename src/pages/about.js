import * as React from "react";
import Layout from "../components/layout";
import { SeoData } from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => {
  <SeoData></SeoData>;
};

export default AboutPage;
