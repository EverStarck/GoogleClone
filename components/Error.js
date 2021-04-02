import styled from '@emotion/styled'

const ErroStyled = styled.p`
 color: var(--red);
`


const Error = ({ errorText }) => {
  return <ErroStyled>{errorText}</ErroStyled>;
};

export default Error;
