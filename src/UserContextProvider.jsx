
import{createContext, useState} from "react";


export const UserContext = createContext();

export default function UserContextProvider({children}) {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState( false);

  return (
    <UserContext.Provider value={{name, setName, submittedName, setSubmittedName, isSubmitted, setIsSubmitted}}>
        {children}
    </UserContext.Provider>
  )
}


