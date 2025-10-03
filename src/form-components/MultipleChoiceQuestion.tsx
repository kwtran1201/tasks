import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    const updateSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Select your answer below:</Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((answer: string) => (
                        <option key={answer} value={answer}>
                            {answer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                Solution Check: {selected === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
