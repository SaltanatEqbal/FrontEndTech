import { useContext } from 'react';
import DetailFormContext from './DetailFormContext';
import InputField from './InputField'

function UserDetailsForm() {
  
  const {
    name,
    age,
    submittedName,
    submittedAge,
    submitted,
    setName,
    setAge,
    setSubmittedName,
    setSubmittedAge,
    setSubmitted
  } = useContext(DetailFormContext);

  function handleChange(event)
  {
      const {name, value} = event.target;
      if(name === "userName")
      {
        setName(value);
      }
      else
      {
        setAge(value);
      }
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    setSubmittedName(name);
    setSubmittedAge(age);
    setName('');
    setAge(0);
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
    <InputField label="Name"
          name="userName"
          onChange={handleChange} 
          type="text"
          value={name}/> 
    <InputField label="Age"
          name="age"
          onChange={handleChange} 
          type="number"
          value={age}/> 
    <br/>
    <button type="submit">Submit</button>
    </form>
  );
}

export default UserDetailsForm;