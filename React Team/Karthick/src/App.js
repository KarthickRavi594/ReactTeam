import React from 'react';
import './App.css';
import Container from './component/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App container">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
            <Container />
        </div>
    );
}

export default App;