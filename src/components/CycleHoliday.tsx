import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "☃️" | "🎆" | "🦃" | "🥵" | "🌳";
const alphabetCycle: Record<Holiday, Holiday> = {
    "☃️": "🎆",
    "🎆": "🌳",
    "🌳": "🥵",
    "🥵": "🦃",
    "🦃": "☃️",
};
const yearCycle: Record<Holiday, Holiday> = {
    "🎆": "🌳",
    "🌳": "🥵",
    "🥵": "🦃",
    "🦃": "☃️",
    "☃️": "🎆",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("☃️");
    function alphabetCycleHoliday(): void {
        const newHoliday = alphabetCycle[holiday];
        setHoliday(newHoliday);
    }
    function yearCycleHoliday(): void {
        const newHoliday = yearCycle[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={alphabetCycleHoliday}>Advance by Alphabet</Button>
            <Button onClick={yearCycleHoliday}>Advance by Year</Button>
        </div>
    );
}
