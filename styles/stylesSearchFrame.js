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
  margin-top: 20px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Button */
  span {
    display: none;
  }
`;

export const FooterSearch = styled.footer`
  font-size: clamp(0.75rem, 2vw, 1rem);
  position: absolute;
  bottom: 0;
`;
