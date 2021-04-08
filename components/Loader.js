import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const dotPulse = keyframes`
  0% {
    box-shadow: 9999px 0 0 -5px var(--black);
  }
  30% {
    box-shadow: 9999px 0 0 2px var(--black);
  }
  60%,
  100% {
    box-shadow: 9999px 0 0 -5px var(--black);
  }
`;

const dotPulseAfter = keyframes`
  0% {
    box-shadow: 10014px 0 0 -5px var(--black);
  }
  30% {
    box-shadow: 10014px 0 0 2px var(--black);
  }
  60%,
  100% {
    box-shadow: 10014px 0 0 -5px var(--black);
  }
`;

const dotPulseBefore = keyframes`
  0% {
    box-shadow: 9984px 0 0 -5px var(--black);
  }
  30% {
    box-shadow: 9984px 0 0 2px var(--black);
  }
  60%,
  100% {
    box-shadow: 9984px 0 0 -5px var(--black);
  }
`;

const LoaderFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  /* width: 100%;  */
  min-width: 300px;
  .dots {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: var(--black);
    color: var(--black);
    box-shadow: 9999px 0 0 -5px var(--black);
    animation: ${dotPulse} 1.5s infinite linear;
    animation-delay: 0.25s;
    &::before,
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: var(--black);
      color: var(--black);
    }
    &::before {
      box-shadow: 9984px 0 0 -5px var(--black);
      animation: ${dotPulseBefore} 1.5s infinite linear;
      animation-delay: 0s;
    }
    &::after {
      box-shadow: 10014px 0 0 -5px var(--black);
      animation: ${dotPulseAfter} 1.5s infinite linear;
      animation-delay: 0.5s;
    }
  }
`;

const Loader = () => {
  return (
    <LoaderFrame>
      <div className="dots"></div>
    </LoaderFrame>
  );
};

export default Loader;
