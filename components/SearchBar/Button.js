import styled from "@emotion/styled";

const ButtonSearchStyled = styled.button`
  background-color: var(--white-button-search);
  border: 1px solid var(--white-button-search);
  border-radius: 4px;
  color: #3c4043;
  font-size: 14px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  cursor: pointer;
  user-select: none;
  &:first-of-type {
    margin-right: 8px;
  }
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-color: var(--white-button-search);
    border: 1px solid #dadce0;
    color: #202124;
  }

  a {
    background-color: red;
    width: 151px;
    height: 36px;
  }
`;

const Button = ({
  type = "submit",
  buttonText,
  buttonH = "64px",
  linkTwitter = false,
}) => {

  const onClick = () => {
    if (linkTwitter)  {
      alert("Yes, you are lucky 💛")
    }
  }

  return (
    <label>
      <span>Search</span>
      <ButtonSearchStyled type={type} aria-label={buttonText} buttonH={buttonH} onClick={onClick}>
        {buttonText}
      </ButtonSearchStyled>
    </label>
  );
};

export default Button;
