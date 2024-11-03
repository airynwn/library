import React from 'react';
import Folder from './Folder.js';
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <div>
            <h1 style={{display: "flex", justifyContent: "center"}}>Header</h1>
            {/* <img src={'src/img/header-test.png'} /> */}
        </div>
    );
}

// * create = ( + )
// ! delete = ( x )

function Navbar() {
    return (
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <div>
                manage
            </div>
            <div>
                customize
            </div>
            <div>
                search
            </div>
            <div>
                login(?)
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <Header />
            <hr />
            <Navbar />
            <hr />
            <div>
                <Folder id='1' title='Test' />
                <Folder id='2' title='Test2' />
            </div>
            <Button variant="outline-primary">Test</Button>{' '}
        </>
    );
}
