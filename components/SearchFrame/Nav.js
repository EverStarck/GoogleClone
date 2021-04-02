import Image from "next/image";
import styled from "@emotion/styled";

const NavSearchFrame = styled.nav`
  position: absolute;
  top: 15px;
  right: 20px;
  display: flex;
  align-items: center;
  a {
    line-height: 24px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
    margin-right: 15px;
  }
  .imgNav {
    img {
      border-radius: var(--radius);
    }
  }
`;

const Nav = () => {
  return (
    <NavSearchFrame>
      <a href="https://mail.google.com" rel="noopener" target="_blank">
        Gmail
      </a>
      <a href="https://www.google.com/imghp" rel="noopener" target="_blank">
        Images
      </a>
      <div className="imgNav">
        <a href="https://twitter.com/EverStarck" rel="noopener" target="_blank" aria-label="Twitter account of the creator of this google copy">
          <Image
            src="/logo.webp"
            alt="Picture of the author"
            width={32}
            height={32}
          />
        </a>
      </div>
    </NavSearchFrame>
  );
};

export default Nav;
