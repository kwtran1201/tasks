import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");
    function changeType(): void {
        if (qType === "short_answer_question") {
            setQType("multiple_choice_question");
        } else {
            setQType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {qType === "short_answer_question" ?
                <div>Short Answer</div>
            :   <div>Multiple Choice</div>}
        </div>
    );
}
