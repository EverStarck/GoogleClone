import { NameGroup } from "../../styles/stylesSearchFrame";
import H1 from "./H1";
import H2 from "./H2";

const Name = ({h1,h2}) => {
  return (
    <NameGroup>
      <hgroup>
        <H1 h1={h1}/>
        <H2 h2={h2}/>
      </hgroup>
    </NameGroup>
  );
};

export default Name;
