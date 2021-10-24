import './App.css';
import data from './Data/data.json';

import Header from './Components/header/Header';
import Filter from './Components/filter/Filter';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__main m-3">
        <Filter />
      </div>
    </div>
  );
}

export default App;
