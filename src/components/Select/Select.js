import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const SelectWrapper = styled.select`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  top: 0;
  left: 0;
  appearance: none;
  z-index: 100;
  opacity: 0;
  position: absolute;

  &:hover {
    color: black;
  }

  &:focus {
    border: 2px solid purple;
  }
`;

const DisplayedElementWrapper = styled.div`
  position: absolute;
  z-index: 0;

`;

const DisplayedSelect = styled.div`
  position: ;
  display: flex;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  top: 0;
  left: 0;
  position: absolute;
  z-index: 50;
  width: max-content;
  align-items: center;
  padding: 12px;

  svg {
    margin-left: 24px;
  }

  &:hover {
    color: black;
  }

  &:focus {
    border: 2px solid purple;
    color: red;
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
    <DisplayedElementWrapper>
      <SelectWrapper
        value={value}
        onChange={onChange}
        style={{
          "--width": displayedValue.length + "px",
        }}
      >
        {children}
      </SelectWrapper>
      <DisplayedSelect>{displayedValue}<Icon id="chevron-down" size={24} strokeWidth={1} onChange={onChange} /></DisplayedSelect>
      
    </DisplayedElementWrapper>
  );
};

export default Select;
