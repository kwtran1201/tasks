import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDice, setLeftDice] = useState<number>(1);
    const [rightDice, setRightDice] = useState<number>(2);

    return (
        <div>
            <div>
                Left Dice: <span data-testid={"left-die"}>{leftDice}</span>
            </div>
            <div>
                Right Dice: <span data-testid={"right-die"}>{rightDice}</span>
            </div>
            <Button
                onClick={() => {
                    setLeftDice(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDice(d6());
                }}
            >
                Roll Right
            </Button>
            Game Result:
            {leftDice === rightDice && leftDice === 1 ?
                "Lose"
            : leftDice === rightDice ?
                "Win"
            :   "Keep Going"}
        </div>
    );
}
