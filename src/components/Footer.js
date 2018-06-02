import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p>&#169; Jason Roundtree {year}</p>
        </footer>
    );
}

export default Footer;