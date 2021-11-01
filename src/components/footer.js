import * as React from "react"
const Footer = () => {
    return (
        <footer
            style={{
                marginTop: `2rem`,
                textAlign: 'center',
                padding: '10px',
                color: 'white'
            }}
        >
            © {new Date().getFullYear()}, Built with123
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    )
}

export default Footer


