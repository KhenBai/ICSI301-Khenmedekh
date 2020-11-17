import React from "react"
import "./Header.css"

class Header extends React.Component{
    render() {
        return (
            <nav><ul><li><a href="/getting-started.html">Getting Started</a></li><li><a href="p2.html">Page 2</a></li><li><a href="p4.html">Page 4</a></li><li><a href="p5.html">Page 5</a></li></ul></nav>
        )
    }
}

export default Header;