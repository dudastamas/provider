
import{createContext, useState} from "react";


export const UserContext = createContext();

export default function UserContextProvider({children}) {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");

  return (
    <UserContext.Provider value={{name, setName, submittedName, setSubmittedName}}>
        {children}
    </UserContext.Provider>
  )
}


