import styled from "@emotion/styled";

const ButtonSearchStyled = styled.button`
  width: 117px;
  height: ${(props) => props.buttonH};
  border: 2px solid var(--blue);
  background-color: var(--blue);
  border-radius: 0 var(--radius) var(--radius) 0;
  background-image: url("./search.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: var(--blutton);
    border: 2px solid var(--blutton);
  }
  &:focus {
    box-shadow: 0px 0px 15px 2px rgba(151, 196, 247, 1);
  }
`;

const Button = ({ buttonH = "64px" }) => {
  return (
    <label >
      <span>Search</span>
      <ButtonSearchStyled type="submit" aria-label="Search" buttonH={buttonH} />
    </label>
  );
};

export default Button;
