import { useContext } from "react";
import DetailFormContext from "./DetailFormContext";
import ThankYouComponent from "./ThankYouComponent";
import UserDetailsForm from "./UserDetailsForm";

function UserDetails() {
   
  const {submitted} = useContext(DetailFormContext);

  return <div> {!submitted ? 
                <UserDetailsForm/> : 
                <ThankYouComponent />
                }</div>;
}

export default UserDetails;