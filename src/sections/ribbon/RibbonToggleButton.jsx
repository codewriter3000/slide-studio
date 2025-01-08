import { useState } from "react";
import { twMerge } from "tailwind-merge";

const RibbonToggleButton = ({ name, icon, onClick, size = 15 }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className={twMerge(`ribbon-button ${isToggled && 'ribbon-button--toggled'}`)} onClick={(evt) => {
      setIsToggled(!isToggled);
      // onClick(evt);
    }}>
      <img
        src={`src/assets/icons/${icon}.svg`}
        alt={name}
        height={size}
        width={size}
      />
    </div>
  );
}

export default RibbonToggleButton;