import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function GiveAttempts(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    const useAction = () => {
        setAttempt(attempt - 1);
    };
    const parseRequest: number = parseInt(request) || 0;
    const gainAction = () => {
        setAttempt(attempt + parseRequest);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of Attempts Left: {attempt}</div>
            <Form.Group>
                <Form.Label>Input number of Attempt Requesting:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                        setRequest(evt.target.value);
                    }}
                />
            </Form.Group>
            <Button disabled={!attempt} onClick={useAction}>
                Use
            </Button>
            <Button onClick={gainAction}>Gain</Button>
        </div>
    );
}
