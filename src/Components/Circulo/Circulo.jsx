import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../AnimatedProgressProvider/AnimatedProgressProvider";
import ChangingProgressProvider from "../ChargingProgressProvider/ChargingProgressProvider";

const Circulo = ({ valueStart, valueEnd }) => {
  return (
    <AnimatedProgressProvider
      valueStart={valueStart}
      valueEnd={valueEnd}
      duration={6}
      easingFunction={easeQuadInOut}
      repeat
    >
      {value => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbar
            value={value}
            text={`${roundedValue}%`}
            styles={buildStyles({
              pathTransition: "none",
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7"
            })}
          />
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default Circulo;
