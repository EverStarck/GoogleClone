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

export const FooterSearch = styled.footer`
  font-size: clamp(0.75rem, 2vw, 1rem);
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  color: #70757a;
  background-color: #f2f2f2;
  justify-content: center;
`;
