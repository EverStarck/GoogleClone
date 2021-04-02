import styled from "@emotion/styled";

import Button from "./Button";

const StyledButtonFrame = styled.div`
  width: 100%;
  margin-top: 29px;
  display: flex;
  justify-content: center;
`;

const ButtonFrame = () => {
  return (
    <StyledButtonFrame>
      <Button buttonText="Google Search"/>
      <Button buttonText="I'm Feeling Lucky"/>
    </StyledButtonFrame>
  );
};

export default ButtonFrame;
