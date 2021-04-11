import Image from "next/image";
import styled from "@emotion/styled";

const GoogleLinksFrame = styled.div`
  position: absolute;
  top: ${(props) => props.topLinks};
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
  .aLink {
    margin-top: -5px;
  }
  .imgNav {
    img {
      border-radius: var(--radius);
    }
  }

  @media only screen and (max-width: 950px) {
    top: 17px;
    right: 10px;
    .aLink {
      display: ${(props) => (props.responsiveLinks ? "none" : "inline-block")};
    }
  }
`;

const GoogleLinks = ({ topLinks = "15px", responsiveLinks = false }) => {
  return (
    <GoogleLinksFrame topLinks={topLinks} responsiveLinks={responsiveLinks}>
      <a
        className="aLink"
        href="https://mail.google.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Gmail
      </a>
      <a
        className="aLink"
        href="https://www.google.com/imghp"
        rel="noopener noreferrer"
        target="_blank"
      >
        Images
      </a>
      <div className="imgNav">
        <a
          href="https://twitter.com/EverStarck"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Twitter account of the creator of this google copy"
        >
          <Image
            src="/logo.webp"
            alt="Picture of the author"
            width={32}
            height={32}
          />
        </a>
      </div>
    </GoogleLinksFrame>
  );
};

export default GoogleLinks;
