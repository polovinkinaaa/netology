import {useState} from "react";

function DropdownList() {
    const [selectedElement, setSelectedElement] = useState("Profile Information")
    const elements = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"]
    return (
        <ul data-id="dropdown" className="dropdown">
            {elements.map((element, index) => (
                <li className={selectedElement === element ? "active": ""} key={index} onClick={() => setSelectedElement(element)}>
                    <a href="#">{element}</a>
                </li>
            ))}
        </ul>
    )
}

export default DropdownList;