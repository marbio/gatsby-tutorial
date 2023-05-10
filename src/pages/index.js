import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle='Homepage'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Homepage</title>
    <meta name='description' content='Gatsby tutorial example' />
  </>
);

// Step 3: Export your component
export default IndexPage;
