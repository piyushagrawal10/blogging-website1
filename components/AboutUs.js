import React from 'react';
import { Container, Header } from 'semantic-ui-react';
function AboutUs() {
    return (
        <Container text >
            <Header as='h3' color='grey' >
            This is a blogging website for all
            kinds of blogs to be posted. One can View and read 
            blog on the website and can also download the blog 
            after login. ( Website currently in production so anyone 
            can register. ) 
            <br />
            The technologies it uses are react, html, css, semantic ui react, javascript.
            </Header>
        </Container>
    );
}

export default AboutUs