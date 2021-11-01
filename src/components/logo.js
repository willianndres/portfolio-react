import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const Logo = () => {
    return <StaticImage
        src="../images/face.png"
        width={120}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Face"
        className="mx-auto d-block"
        style={{
            marginBottom: `1.45rem`,
            borderRadius: `30%`,
            position: 'relative',
            overflow: 'hidden',
            width: '7rem'
        }}
    />
}

export default Logo


