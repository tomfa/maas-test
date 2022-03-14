type Props = { onChange: (val: number) => void, id?: string }
const RangeInput = (props: Props) => {
  return (
    <input
      id={props.id}
      type={'number'}
      min={1}
      max={5}
      onChange={e => (
        e.target.value &&
        !Number.isNaN(parseInt(e.target.value)) &&
        props.onChange(parseInt(e.target.value))
      )}
    />
  );
};

export default RangeInput;
