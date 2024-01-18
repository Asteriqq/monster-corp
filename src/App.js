import { Component } from 'react';
import CardList from './Components/Card-List/Card-list.component.jsx';
import SearchBox from './Components/Search-Box/Search-box.component.jsx';
import './index.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(()=>{
      return {monsters: users}
    }
    ));
  }

  onSearchChange = (event) => { const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });
    }

  render(){
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">MONSTERS CORP</h1>
        
        <SearchBox onChangeHandler = {onSearchChange} placeholder = {'search monsters'} className = {'monsters-search-box'} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;