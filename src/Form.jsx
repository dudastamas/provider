
import {  useContext} from "react";
import { UserContext } from "./UserContextProvider.jsx";

export default function Form() {

  const {name, setName, setSubmittedName} = useContext(UserContext);


  function handleSubmit(e){
    e.preventDefault();
    setSubmittedName(name);
    localStorage.setItem('userName', name);
  }
  return (
    <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Üdvözöljük!</h1>
      
      <div className="mb-4">
        <label 
          htmlFor="name" 
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          Név
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Írja be a nevét"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Küldés
      </button>
    </form>
  )
}

