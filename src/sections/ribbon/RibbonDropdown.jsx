import { useState } from "react";

const RibbonDropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="ribbon-dropdown">
      <div className="ribbon-dropdown--selected" onClick={() => setIsOpen(!isOpen)}>
        <p className="ribbon-dropdown--selected--text">
          {selectedItem.name}
        </p>
        <img
          className="ml-2"
          src={`src/assets/icons/down-arrow.svg`}
          height={15}
          width={15}
        />
      </div>
      {isOpen && items.map((item, index) => (
        <div key={index} className="ribbon-dropdown--item" onClick={() => {
          setSelectedItem(item);
          setIsOpen(false);
        }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default RibbonDropdown;
