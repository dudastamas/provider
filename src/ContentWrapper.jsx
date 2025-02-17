import { UserContext } from "./UserContextProvider"
import { useContext } from "react";
import Hello from "./Hello.jsx";
import Form from "./Form.jsx";

export default function ContentWrapper() {
    const {isSubmitted} = useContext(UserContext);
  return (
   isSubmitted ? <Hello/> : <Form/>
  )
}
