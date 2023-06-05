/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Bar = styled.div`
  background-color: ${COLORS.gray50};
  height: ${(props) => {
    if (props.size === "large") {
      return "24px;";
    } else if (props.size === "medium") {
      return "12px;";
    } else if (props.size === "small") {
      return "8px;";
    }
  }}
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  padding: ${(props) => props.size === "large" && "4px"};
  justify-content: center;
`;

const CompletedBar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${(props) => props.value}%;
  border-radius: ${(props) => {
    if (props.value >= 98) {
      return "4px";
    } else {
      return "4px 0px 0px 4px";
    }
  }};
`;
const ProgressBar = ({ value, size }) => {
  return (
    <Bar size={size}>
      <VisuallyHidden>{value}</VisuallyHidden>
      <CompletedBar value={value} />
    </Bar>
  );
};

export default ProgressBar;
