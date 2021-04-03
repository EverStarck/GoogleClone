import styled from "@emotion/styled";
import BoxFrame from "./BoxFrame";

const NavInfo = styled.nav`
  display: flex;
  margin-left: 169px;
  border-bottom: 1px solid #ebebeb;

  @media only screen and (max-width: 950px) {
    margin: 0;
    justify-content: center;
  }

  @media only screen and (max-width: 450px) {
    padding-left: 12px;
    padding-right: 12px;
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Nav = () => {
  return (
    <NavInfo>
      <BoxFrame />
    </NavInfo>
  );
};

export default Nav;
