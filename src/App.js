import './App.css';
import data from './Data/data.json';

import Header from './Components/header/Header';
import Filter from './Components/filter/Filter';
import Main from './Components/main/Main';

function App() {
  return (
    <div className="app bg-ghostwhite">
      <Header />

      <div className="app__main m-3">
        <Filter />

        <Main data={data}/>
      </div>
    </div>
  );
}

export default App;
