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
            © {new Date().getFullYear()}
        </footer>
    )
}

export default Footer


