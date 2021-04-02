import styled from "@emotion/styled";

export const MainSearch = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
`;

export const NameGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormSearch = styled.form`
  display: flex;
  /* Button */
  label:last-of-type {
    span {
      display: none;
    }
  }

  /* Tablet */
  @media only screen and (max-width: 820px) {
    label:first-of-type {
      input[type="url"] {
        width: 100%;
        padding-left: 16px;
      }
    }

    label:last-of-type {
      button[type="submit"] {
        width: 300%;
        background-size: 40% 40%;
      }
    }
  }

  /* Mobile */
  @media only screen and (max-width: 500px) {
    label:first-of-type {
      input[type="url"] {
        width: 100%;
        height: 48px;
        font-size: 0.75rem;
        &:hover,
        :focus {
          border: 1px solid var(--black);
        }
      }
    }

    label:last-of-type {
      button[type="submit"] {
        width: 44px;
        height: 48px;
        background-size: 40% 40%;
      }
    }
  }
`;

export const FooterSearch = styled.footer`
  font-size: clamp(0.75rem, 2vw, 1rem);
  position: absolute;
  bottom: 0;
`;
