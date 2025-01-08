const RibbonButton = ({ name, icon, onClick, size = 15 }) => {
  return (
    <div className="ribbon-button" onClick={onClick}>
      <img
        src={`src/assets/icons/${icon}.svg`}
        alt={name}
        height={size}
        width={size}
      />
    </div>
  );
}

export default RibbonButton;