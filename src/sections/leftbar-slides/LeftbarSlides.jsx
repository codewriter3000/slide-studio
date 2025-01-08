import React from "react";
import { LeftbarToolbar } from "..";
import { LeftbarToolbarButton } from "../../components";
// import { createNewSlide } from "../../store";
import "./leftbar-slides.css";

const LeftbarSlides = () => {
  // const slides = useSelector((state) => state.slides);
  return (
    <div className="leftbar-slides">
      <LeftbarToolbar>
        <LeftbarToolbarButton icon="new-slide" />
         {/* onClick={() => createNewSlide()} /> */}
        <LeftbarToolbarButton icon="delete-slide" />
        <LeftbarToolbarButton icon="duplicate-slide" />
        <LeftbarToolbarButton icon="reuse-slide" />
      </LeftbarToolbar>
      {/* <div className="leftbar-slides__item">Slide 1</div>
    <div className="leftbar-slides__item">Slide 2</div>
    <div className="leftbar-slides__item">Slide 3</div>
    <div className="leftbar-slides__item">Slide 4</div>
    <div className="leftbar-slides__item">Slide 5</div> */}
    </div>
  );
};

export default LeftbarSlides;
