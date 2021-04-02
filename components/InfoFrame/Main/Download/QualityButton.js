import { useContext } from "react";
import styled from "@emotion/styled";

import { ApiDataContext } from "../../../../context/ApiDataContext";

const Select = styled.label`
  span {
    display: none;
  }
  .selectDiv {
    margin-top: 12px;
    position: relative;
    width: 120%;
    &::after {
      content: "";
      width: 0.8em;
      height: 0.5em;
      background-color: #a0a3bd;
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      position: absolute;
      top: 45%;
      right: 10%;
    }
    select {
      width: 100%;
      background-color: var(--gray);
      border: 1px solid transparent;
      padding: 16px;
      color: var(--black);
      border-radius: var(--radius);
      appearance: none;
      cursor: pointer;
      transition: all 150ms ease;
      &:focus {
        border: 1px solid var(--black);
        background-color: var(--real-white);
      }
    }
  }

  @media only screen and (max-width: 1124px) {
    .selectDiv {
      &::after {
        top: 40%;
      }
      select {
        padding: 12px;
      }
    }
  }
`;

const QualityButton = ({
  urlSelected,
  setUrlSelected,
  isBannerSelect = true,
}) => {
  // Context
  const { data } = useContext(ApiDataContext);

  const setUrlToDownload = (e) => {
    if (isBannerSelect) {
      setUrlSelected((urlSelected) => ({
        ...urlSelected,
        banner: JSON.parse(e.target.value),
      }));
    } else {
      setUrlSelected((urlSelected) => ({
        ...urlSelected,
        avatar: JSON.parse(e.target.value),
      }));
    }
  };

  return (
    <Select>
      <span>Choose the download quality of Banner</span>
      <div className="selectDiv">
        <select onChange={setUrlToDownload}>
          {isBannerSelect
            ? data.ytData[0].banner.map((banner) => (
                <option value={JSON.stringify(banner)} key={banner.url}>
                  {banner.height} x {banner.width}
                </option>
              ))
            : data.ytData[0].avatar.map((avatar) => (
                <option value={JSON.stringify(avatar)} key={avatar.url}>
                  {avatar.height} x {avatar.width}
                </option>
              ))}
        </select>
      </div>
    </Select>
  );
};

export default QualityButton;
