import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import japanImage from "./Assets/Large-Miyajima-Island-Hiroshima-Japan-in-spring-1132298347.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                <h1>This is a Header</h1>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. This is Ken Tran (702616829)
                </p>
                <p>Hello World</p>
                <ul>
                    Grocery Item List:
                    <li>Apple</li>
                    <li>Blanket</li>
                    <li>Cream Cheese</li>
                    <li>Dog Food</li>
                    <li>Egg</li>
                </ul>
            </div>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div>
                <img
                    src={japanImage}
                    alt="A picture of Japan"
                    style={{ width: "500px" }}
                />
            </div>
            <div
                style={{
                    width: "200px",
                    height: "300px",
                    backgroundColor: "red",
                    color: "green",
                }}
            >
                <Container>
                    <Row>
                        <Col>First column</Col>
                        <Col>Second column</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
