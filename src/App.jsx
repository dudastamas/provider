
import Form from './Form.jsx';
import './App.css';
import Hello from './Hello.jsx';
import UserContextProvider from './UserContextProvider.jsx';

function App() {
  
  return (
    <>
    <div >
      <UserContextProvider>
        <Form/>
        <Hello/>
      </UserContextProvider>
    </div>
    </>
  );
}

export default App;
