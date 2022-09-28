import { useState } from "react";
import styled from "styled-components";

const ToggleBtn = styled.button`
  width: 76px;
  height: 32px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.toggle.bgColor};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  &::before, &::after  {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.5s ease-in-out;
  }
  &::before {
    content: '🌞';
    left: 0;
    opacity: ${(props) => props.isDarkMode ? '0' : 1 }
  }
  &::after {
    content: '🌝';
    right: 0;
    opacity: ${(props) => props.isDarkMode ? '1' : 0 }
  }
`

const Toggle = function(){
  return (
    <ToggleBtn>
      {/* <span className="ic-sun" aria-label="light mode icon">🌞</span>
      <span className="ic-moon" aria-label="dark mode icon">🌝</span> */}
    </ToggleBtn>
  )
}

export default Toggle;