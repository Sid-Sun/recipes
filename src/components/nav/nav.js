import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function Nav() {
    return (
        <div>
            <Navbar bg={"dark"} variant={"dark"} sticky={"top"}>
                <Container>
                    <Navbar.Brand href="/">Recipes</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Nav;