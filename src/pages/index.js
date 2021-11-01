import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Inital from '../components/index-page/initial';
import AboutMe from '../components/index-page/about-me';
import Contact from '../components/index-page/contact';
const Index = () => {
  return (
    <Layout>
      <Seo title="Inicio" />
      <Inital />
      <AboutMe />
      <Contact />
    </Layout>
  );
}

export default Index
