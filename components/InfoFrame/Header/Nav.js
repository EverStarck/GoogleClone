import Link from "next/link";
import Image from "next/image";
import SearchBarContainer from "../../SearchBar/SearchBarContainer";

import styled from "@emotion/styled";

const NavInfo = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;
  background-color: var(--white);
  box-shadow: 0px 2px 5px rgba(2, 10, 20, 0.25);
  position: relative;
  z-index: 3;
  a {
    margin-right: 32px;
  }
  section {
    margin-top: 8px;
  }

  /* Mobile */
  @media only screen and (max-width: 500px) {
    height: 68px;
    .logo {
      display: none;
    }
    section {
      width: 90%;
    }
  }
`;

const Nav = ({ inputH, buttonH }) => {
  return (
    <NavInfo>
      <div className="logo">
        <Link href="/">
          <a>
            <Image
              src="/logo.svg"
              alt="logo of Youtube Api Starck"
              width={45.5}
              height={32}
            />
          </a>
        </Link>
      </div>
      <section>
        <SearchBarContainer inputH="50px" buttonH="50px" />
      </section>
    </NavInfo>
  );
};

export default Nav;
