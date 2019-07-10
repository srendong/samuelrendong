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

const Circulo = ({ valueStart, valueEnd, name }) => {
  return (
    <AnimatedProgressProvider
      valueStart={valueStart}
      valueEnd={valueEnd}
      name={name}
      duration={6}
      easingFunction={easeQuadInOut}
    //   repeat
    >
      {value => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbar
            value={value}
            
            text={`${roundedValue}%`}
            styles={buildStyles({
              pathTransition: "none",
              pathColor: `#B6B5B8`,
              textColor: "#FAF5F2",
              trailColor: "#FAF5F2",
              backgroundColor: "#3e98c7"
            })}
          />
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default Circulo;
