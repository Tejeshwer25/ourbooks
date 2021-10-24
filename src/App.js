import {useState} from 'react';
import './App.css';
import data from './Data/data.json';

import Header from './Components/header/Header';
import Filter from './Components/filter/Filter';
import Main from './Components/main/Main';

function App() {

  const [filter, setFilter] = useState([]);

  return (
    <div className="app bg-ghostwhite">
      <Header />

      <div className="app__main m-3">
        <Filter setFilter={setFilter} filters={filter}/>

        <Main data={data} filter={filter}/>
      </div>
    </div>
  );
}

export default App;
