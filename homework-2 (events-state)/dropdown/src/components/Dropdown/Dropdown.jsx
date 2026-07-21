import DropdownList from "../DropdownList/DropdownList.jsx";
import {useState} from "react";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="dropdown-list">
                <div className="container">
                    <div data-id="wrapper" className= {`dropdown-wrapper ${isOpen ? "open" :""}`}>
                        <button data-id="toggle" className="btn" onClick={() => setIsOpen(!isOpen)}>
                            <span>Account Settings</span>
                            <i className="material-icons">public</i>
                        </button>
                        <DropdownList/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown;