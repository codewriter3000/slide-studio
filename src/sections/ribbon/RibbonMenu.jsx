import { useState } from "react";
import { twMerge } from "tailwind-merge";

const RibbonMenu = ({ name, icon, onClick, items, size = 15 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="ribbon-menu"
      onClick={(evt) => {
        setIsOpen(!isOpen);
        onClick(evt);
      }}
    >
      <div className={twMerge(`ribbon-button h-12 px-2 ${isOpen && "ribbon-button--toggled"}`)}>
        <img src={`src/assets/icons/${icon}.svg`} alt={name} height={size} width={size} />
        <img
          className="ml-2"
          src={`src/assets/icons/down-arrow.svg`}
          height={15}
          width={15}
        />
      </div>
      {isOpen &&
        items.map((item, index) => (
          <div
            key={index}
            className="ribbon-menu--item"
            onClick={() => {
              setSelectedItem(item);
              setIsOpen(false);
            }}
          >
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default RibbonMenu;
