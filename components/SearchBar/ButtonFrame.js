import styled from "@emotion/styled";
import { useContext } from "react";
import { ApiDataContext } from "../../context/ApiDataContext";

import Button from "./Button";

const StyledButtonFrame = styled.div`
  width: 100%;
  margin-top: 29px;
  display: flex;
  justify-content: center;
`;

const ButtonFrame = () => {
  // Context
  const { data } = useContext(ApiDataContext);
  return (
    <StyledButtonFrame>
      {data.loading ? (
        <Button buttonText="Google Search" type="button" />
      ) : (
        <Button buttonText="Google Search" />
      )}

      <Button buttonText="I'm Feeling Lucky" type="button" />
    </StyledButtonFrame>
  );
};

export default ButtonFrame;
