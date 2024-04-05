import './App.css';
import Refresh from './Refresh';
import data from './data.json';
import { useState, CSSProperties, useEffect } from "react";
import { GridLoader } from "react-spinners";


const App = () => {





  const [refreshOption, setRefreshOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const refresh = (option) => {
    setIsLoading(true);
    setRefreshOption(option);
  }


  return (
    <div className="App">

      
      {
        (refreshOption==="refreshPage" && isLoading===true) ? ((
          <Refresh refreshOption={refreshOption} setIsLoading={setIsLoading} />
          )) : (
            <div className='container'>
            <header className="App-header">
              <div className='left-header'>
                <div className='button-patch'>
                  <div>
                    <button onClick={() => refresh("refreshTable")}>Refresh Table</button>
                  </div>
                  <div>
                    <button onClick={() => refresh("refreshPage")}>Refresh Page</button>
                  </div>
                </div>
              </div>
              <div className="title">
                <h2>Refreshing-Table</h2>
              </div>
            </header>
              <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>
                      ID
                    </th>
                    <th>
                      Username
                    </th>
                    <th>
                      Firstname
                    </th>
                    <th>
                      LastName
                    </th>
                    <th>
                      Email Id
                    </th>
                    <th>
                      isAdmin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (refreshOption==="refreshTable"&& isLoading===true) ? (
                      <tr>
                      <td td colSpan="6" style={{ height: "150px", textAlign: "center", color: "#dff7f7" }}>
                          <Refresh refreshOption={refreshOption} setIsLoading={setIsLoading}/>
                      </td>
                      </tr>
                      
                    ) : (
          
                        data.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email ? user.email : "Email Id doesn't exist"}</td>
                          <td>{String(user.isAdmin) ? String(user.isAdmin) : "N/A"}</td>
                        </tr>
                      ))
                                        
                    )
                  }
                </tbody>
              </table>
            </div>
            </div>
          )
        }
    </div>
  );
}

export default App;
