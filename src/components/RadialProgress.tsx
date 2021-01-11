import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div<any>`
  ${(props: { circumference: number; offset: number;}) => `
        .progress-ring-circle {
            stroke-dasharray: ${props.circumference} ${props.circumference};
            stroke-dashoffset: ${props.offset};

            transition: stroke-dashoffset 0.35s;
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
        }
    `}

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    position: absolute;
    text-align: center;
    font-size: 15px;
  }
`;

const RadialProgress = (props:any) => {
  const percent = props.percent ? Math.min(100, Math.max(0, props.percent)) : 0;
  const size = props.width || 100;

  const strokeWidth = 8;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;

  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  const getText = () => {
    if (percent >= 80) return "Excellent";
    else if (percent >= 50) return "Fair";
    else return "Poor";
  };

  return (
    <StyledWrapper circumference={circumference} offset={offset}>
      <svg className="progress-ring" height={size} width={size}>
        <circle
          strokeWidth={strokeWidth}
          fill="none"
          stroke="#cecece"
          r={radius}
          cx={center}
          cy={center}
        />
        <circle
          className="progress-ring-circle"
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="#45b6fe"
          r={radius}
          cx={center}
          cy={center}
        />
      </svg>
      <div className="text">
        <div>
          <b>{percent.toFixed(2)} %</b>
        </div>
        <div>{getText()}</div>
      </div>
    </StyledWrapper>
  );
};

export default RadialProgress;
