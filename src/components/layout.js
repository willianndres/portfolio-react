import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from './footer';
import { theme } from '../../store/slices';
import { useSelector } from 'react-redux';
import "../css/index.scss";

const Layout = ({ children }) => {
  const themeRedux = useSelector(theme);
  return (
    <div className={themeRedux === true ? 'light' : 'dark'}>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
