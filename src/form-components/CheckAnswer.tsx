import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const updateAnswer = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAnswer(event.target.value);
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>Solution Found: {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
