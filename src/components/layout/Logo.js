import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Smoke = styled.div`
  span {
    position: relative;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 20px;
    animation: animate 5s linear infinite;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.35s;
    }
    &:nth-child(6) {
      animation-delay: 0.4s;
    }
  }
  @keyframes animate {
    0% {
      filter: blur(0);
    }
    40% {
      filter: blur(20px);
    }
    80% {
      filter: blur(0px);
    }
    100% {
      filter: blur(0px);
    }
  }
`;
const Logo = (props) => {
  return (
    <NavLink to={props.to} className="flex-1 text-center">
      <Smoke>
        <span>H</span>
        <span>E</span>
        <span>N</span>
        <span>L</span>
        <span>L</span>
        <span>A</span>
      </Smoke>
    </NavLink>
  );
};

export default Logo;
