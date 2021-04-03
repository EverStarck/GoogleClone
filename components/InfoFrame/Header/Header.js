import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import SearchBarContainer from "../../SearchBar/SearchBarContainer";
import GoogleLinks from "../../GoogleLinks";

const StyledHeader = styled.header`
  height: 100%;
  margin: 20px 30px 0 30px;
  display: flex;
  align-items: center;
  .imgLogoInfo {
    margin-right: 45px;
    padding-top: 4px;
    cursor: pointer;
  }

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    .imgLogoInfo {
      padding: 0 0 14px 0;
      margin-right: 0;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <div className="imgLogoInfo">
          <Image
            src="/logoInfo.webp"
            alt="Picture of the author"
            width={92}
            height={30}
          />
        </div>
      </Link>

      <SearchBarContainer formAlign={true}/>

      <GoogleLinks topLinks="25px" responsiveLinks={true} />
    </StyledHeader>
  );
};

export default Header;
