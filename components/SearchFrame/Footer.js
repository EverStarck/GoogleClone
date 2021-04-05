import styled from "@emotion/styled";

const FooterSearch = styled.footer`
  font-size: clamp(0.75rem, 2vw, 1rem);
  position: ${(props) => props.changePosition ? "relative" : "absolute"};
  bottom: 0;
  width: 100%;
  display: flex;
  color: #70757a;
  background-color: #f2f2f2;
  justify-content: center;
`;

const Footer = ({changePosition = true}) => {
  return (
    <FooterSearch changePosition={changePosition}>
      <p>Made by EverStarck 💙</p>
    </FooterSearch>
  );
};

export default Footer;
