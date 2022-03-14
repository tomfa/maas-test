import RangeInput from "./RangeInput";
import {MaasQuestion, Survey} from "../config";

type Props = { result: Survey }
const Result = (props: Props) => {
  const score = props.result
    .map(r => r.answer)
    .reduce((s, i) => s + i, 0);

  return (
    <div>
      <h2>Congrats on being done, I guess?</h2>
      <p>You got a score of {score}. You do you</p>
    </div>
  );
};

export default Result;
