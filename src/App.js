import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchBar from './Component/SearchBar';


const App = () => {
  return (
    <div className="Full_screen container-fluid">
      <div className="design_size container col-md-10 my-5">
        <SearchBar/>
       
      </div>
    </div>
  )
}

export default App
