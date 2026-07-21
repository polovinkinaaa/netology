import { useState } from 'react';

function DropdownList() {
  const [selectedElement, setSelectedElement] = useState('Profile Information');
  const dropdownItems = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];
  return (
    <ul data-id="dropdown" className="dropdown">
      {dropdownItems.map((item, index) => (
        <li
          style={{ color: selectedElement === item ? '#5380F7' : '#666' }}
          key={index}
          onClick={() => setSelectedElement(item)}
        >
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default DropdownList;
