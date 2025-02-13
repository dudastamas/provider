
import { useContext } from "react";
import { UserContext } from "./UserContextProvider.jsx";

export default function Hello() {
  const { submittedName} = useContext(UserContext);
  return (
    <div>Hello {submittedName}</div>
  )
}

