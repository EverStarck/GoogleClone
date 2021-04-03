import Link from "next/link";
import Image from "next/image";
import SearchBarContainer from "../../../SearchBar/SearchBarContainer";

import styled from "@emotion/styled";
import BoxFrame from "./BoxFrame";

const NavInfo = styled.nav`
  display: flex;
  margin-left: 169px;
  /* justify-content: center; */
  border-bottom: 1px solid #ebebeb;
  /* align-items: center; */
  /* position: relative; */
  /* z-index: 3; */

  /* Mobile */
  /* @media only screen and (max-width: 500px) {
    height: 68px;
    .logo {
      display: none;
    }
    section {
      width: 90%;
    }
  } */
`;

const Nav = ({ inputH, buttonH }) => {
  return (
    <NavInfo>
      <BoxFrame/>

      {/* <div className="logo">
        <Link href="/">
          <a>
            <Image
              src="/logo.webp"
              alt="logo of Youtube Api Starck"
              width={45.5}
              height={32}
            />
          </a>
        </Link>
      </div>
      <section>
        <SearchBarContainer inputH="50px" buttonH="50px" />
      </section> */}
    </NavInfo>
  );
};

export default Nav;
