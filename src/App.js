import logo from './logo.svg';
import './App.css';
import UserDetails from "./components/UserDetails";
import { useState } from "react";
import DetailFormContext from "./components/DetailFormContext";

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [submittedName, setSubmittedName] = useState('');
  const [submittedAge, setSubmittedAge] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <DetailFormContext.Provider
      value={{
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
      }}>
    <div className="App">
      <UserDetails/>
    </div>
    </DetailFormContext.Provider>
  );
}

export default App;
