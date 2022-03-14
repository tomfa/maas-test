import RangeInput from "./RangeInput";
import {MaasQuestion} from "../config";

type Props = { q: MaasQuestion, onChange: (q: MaasQuestion, val: number) => void }
const Question = (props: Props) => {
  const id = `q-id-${props.q.id}`;
  return (
    <div>
      <label htmlFor={id}>{props.q.title}</label>
      <RangeInput id={id} onChange={(val) => props.onChange(props.q, val)}/>
    </div>
  );
};

export default Question;
