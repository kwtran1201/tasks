import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const COLORS: string[] = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "cyan",
        "purple",
        "magenta",
    ];
    const [chosen, setChosen] = useState<string>(COLORS[0]);
    const updateColor = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setChosen(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                You have chosen color{" "}
                <span style={{ background: chosen }} data-testid="colored-box">
                    {chosen}
                </span>
                .
            </div>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="color"
                    label={<span style={{ background: color }}>{color}</span>}
                    value={color}
                    checked={chosen === color}
                    onChange={updateColor}
                />
            ))}
        </div>
    );
}
