import styled from "@emotion/styled";

import H3 from "../Download/H3";


const ChannelInfoStyled = styled.article`
  margin-top: 20px;
  .h3Div {
    float: left;
    height: 25px;
  }
  p {
    padding-top: 4px;
    font-size: clamp(0.75rem, 3vw, 1.25rem);
    letter-spacing: 0.75px;
    line-height: 25px;
  }

  @media only screen and (max-width: 500px) {
      .h3Div {
        height: 10px;
      }
    p {
        padding-top: 0px;
      line-height: 17px;
    }
  }
`;

const ChannelInfo = ({mainText, pText}) => {
  return (
    <ChannelInfoStyled>
      <div className="h3Div">
        <H3
          margin="0 10px 0 0"
          fw="700"
          fz="clamp(0.875rem, 3vw, 1.75rem)"
          h3={mainText}
        />
      </div>
      <p>{pText}</p>
    </ChannelInfoStyled>
  );
};

export default ChannelInfo;
