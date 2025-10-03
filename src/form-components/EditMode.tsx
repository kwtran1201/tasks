import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    const updateEditMode = () => {
        setEditMode(!editMode);
    };
    const updateName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
    };
    const updateIsStudent = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {name} is {isStudent ? "" : "not"} a student
            </div>
            <Form.Group>
                <Form.Check
                    type="switch"
                    label="Enter edit mode?"
                    checked={editMode}
                    onChange={updateEditMode}
                />
                <Form.Control
                    hidden={!editMode}
                    type="text"
                    value={name}
                    onChange={updateName}
                />
                <Form.Check
                    hidden={!editMode}
                    type="checkbox"
                    id="student"
                    label="Is student?"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            </Form.Group>
        </div>
    );
}
