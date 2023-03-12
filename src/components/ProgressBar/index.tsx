import React from "react";
import { BarContainer, BarContainerWrapper, BarItem } from "./styles";
import { ProgressBarProps } from "./types";

const ProgressBar = ({bgColor,fgColor,completed} : ProgressBarProps) => {
  return (
    <BarContainerWrapper item container alignItems="center">
      <BarContainer item container width={`${completed}%`}>
        <BarItem xs={12} item color={bgColor} className="bar-item"></BarItem>
      </BarContainer>
      <BarContainer item container width={`${100-completed}%`}>
        <BarItem xs={12} item color={fgColor} className="bar-item"></BarItem>
      </BarContainer>
    </BarContainerWrapper>
  );
};

export default ProgressBar;
