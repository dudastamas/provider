

import './App.css';

import UserContextProvider from './UserContextProvider.jsx';

import ContentWrapper from './ContentWrapper.jsx';
import CityListing from './CityListing.jsx';
import PropretyCard from './PropretyCard.jsx';

function App() {
  

  //const {isSubmitted} = useContext(UserContext);
  
  return (
    <>
    <div >
      <UserContextProvider>
         <ContentWrapper/>
         <CityListing/>
         <PropretyCard />
      </UserContextProvider>
    </div>
    </>
  );
}

export default App;
