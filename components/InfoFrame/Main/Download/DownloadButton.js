import { saveAs } from "file-saver";
import styled from "@emotion/styled";
import { useContext } from "react";

import { ApiDataContext } from "../../../../context/ApiDataContext";

const DownloadButtonSyled = styled.div`
  button {
    width: 100%;
    background-color: var(--blue);
    border: none;
    padding: 16px 20px;
    margin-top: 12px;
    border-radius: var(--radius);
    color: var(--real-white);
    font-weight: 600;
    font-size: clamp(0.9rem, 3vw, 1.1rem);
    display: flex;
    cursor: pointer;
    span {
      img {
        user-select: none;
        width: clamp(15px, 3vw, 20px);
        margin-right: 15px;
      }
    }
  }

  @media only screen and (max-width: 1124px) {
    button {
      padding: 12px 16px;
    }
  }
`;

const DownloadButton = ({ isBannerSelect = true, urlSelected }) => {
  // Context
  const { data } = useContext(ApiDataContext);

  const downloadImage = async () => {
    if (isBannerSelect) {
      saveAs(urlSelected.banner.url,`Banner ${data.ytData[0].channelInfo.title} ${urlSelected.banner.height}x${urlSelected.banner.width}.jpg`);
    } else {
      saveAs(urlSelected.avatar.url,`Avatar ${data.ytData[0].channelInfo.title} ${urlSelected.avatar.height}x${urlSelected.avatar.width}.jpg`);
    }
  };

  return (
    <DownloadButtonSyled>
      <button onClick={downloadImage}>
        <span>
          <img
            src="./downloadIcon.svg"
            alt="icon with down arrow for download button"
          />
        </span>
        Download
      </button>
    </DownloadButtonSyled>
  );
};

export default DownloadButton;

// Another way to save the img
// if (isBannerSelect) {
//   const downloadFetch = await fetch(urlSelected.banner.url);
//   const blob = await downloadFetch.blob();
//   saveAs(blob, `Banner ${data.ytData[0].channelInfo.title} ${urlSelected.banner.height}x${urlSelected.banner.width}.jpg`);
// } else {
//   const downloadFetch = await fetch(urlSelected.avatar.url);
//   const blob = await downloadFetch.blob();
//   console.log(blob)
//   saveAs(blob, `Avatar ${data.ytData[0].channelInfo.title} ${urlSelected.avatar.height}x${urlSelected.avatar.width}.jpg`);
// }
