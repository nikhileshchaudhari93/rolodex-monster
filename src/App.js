import './App.css';
import React from 'react';
import { CardGrid } from './components/card-grid/card-grid.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  constructor() {
    super();
     
    this.state = {
      users: [],
      searchText: '',
      title: 'User Search App'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => this.setState({users: users}))

  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  filterUsers = () => {
    return this.state.users.filter((user) => {
      return user.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    });
  }

  render() {
    const filteredUsers = this.filterUsers();
    
    return (
      <div className="App">
        <h1>{ this.state.title }</h1>
        <SearchBox handleChange={ this.handleChange }></SearchBox>
        <CardGrid users={filteredUsers}></CardGrid>
      </div>
    )
  }
}
export default App;
