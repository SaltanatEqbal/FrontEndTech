import { useContext } from "react";
import DetailFormContext from "./DetailFormContext";

function ThankYouComponent() {

  const {submittedName: name, submittedAge:age, setSubmitted} = useContext(DetailFormContext);

  const handleRevert = function() {
    setSubmitted(false);
  }

  return (
    <pre>
    <code>Your Submission is:</code>
    <br/>
    <code> Name is : {name}</code>
    <br/>
    <code> Age is: {age} </code>
    <br/>
    <button onClick={handleRevert}>Make another submission</button>
    </pre>
    
  );
}

export default ThankYouComponent;