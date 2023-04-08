import Login from './Components/Login/Login';
import {useState} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const [user, setUser] = useState(sessionStorage.getItem('userLoggedIn') ? (sessionStorage.getItem('userLoggedIn')) : '');
  
  return (
    // !user ?
    // (<div className="App">
      
    //   <Login setUser= {setUser}/>
    // </div>)
    // :
    (<div className="App">
      <style>{`
        body {
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}</style>
      <Dashboard setUser= {setUser}/>
    </div>)
  );
}

export default App;
