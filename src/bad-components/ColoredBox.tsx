import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorTool {
    color: number;
    paint: (x: number) => void;
}
function ChangeColor({ color, paint }: colorTool): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                paint((1 + color) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ color }: colorTool): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    color={colorIndex}
                    paint={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    color={colorIndex}
                    paint={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
