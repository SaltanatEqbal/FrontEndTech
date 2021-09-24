import Spacer from "./Spacer";

function InputField({label, ...remainingProps}) {
  return (
    <label> {label}
      <br/>
      <input {...remainingProps}/>
      <Spacer numberLines={2}/>
    </label>
  );
}

export default InputField;