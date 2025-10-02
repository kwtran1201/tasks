import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Action {
    value: number;
    action: (x: number) => void;
}

function Doubler({ value, action }: Action): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                action(2 * value);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ value, action }: Action): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                action(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} action={setDhValue}></Doubler>
            <Halver value={dhValue} action={setDhValue}></Halver>
        </div>
    );
}
