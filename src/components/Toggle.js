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
    left: 8px;
    opacity: ${(props) => props.isDarkMode ? '0' : 1 };
  }
  &::after {
    content: '🌝';
    right: 8px;
    opacity: ${ (props) => props.isDarkMode ? '1' : 0 };
  }
`

const Cirecle = styled.span`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: ${ (props) => props.isDarkMode ? '16px' : '60px' };
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #E3E3E8;
  transition: left 0.5s ease-in-out;
`

export { ToggleBtn, Cirecle };