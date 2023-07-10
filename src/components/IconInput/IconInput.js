import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Input = styled.input`
  width: var(--width)
`

const InputWrapper = styled.div`
  
`
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) =>  
  <InputWrapper>
    <Input label = {label} placeholder = { placeholder}  type={'search'} style={{
    '--width': width + 'px'
  }}/>
    <Icon id={icon}/>
  </InputWrapper>;
;

export default IconInput;
