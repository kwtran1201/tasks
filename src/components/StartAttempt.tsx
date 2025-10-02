import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempt(attempt - 1);
        setInProgress(true);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function addAttempt(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            <div>Number of attempts left: {attempt}</div>
            <Button onClick={startQuiz} disabled={inProgress || !attempt}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
