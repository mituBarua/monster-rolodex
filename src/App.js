import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import './App.css';
import {Cardlist} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';

class App extends Component {
    constructor() {
        super();

        this.state = {
         monsters : [],
         searchField: ''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users}));
    }
    handleChange = e => {
     this.setState({searchField:  e.target.value});
    };


render()  {
    const {monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
    return (
   <div className='App'>
   <h1>Monster Rolodex</h1>
   <SearchBox
       placeholder ="search monsters"
       handleChange={this.handleChange}
   />

   <Cardlist monsters= {filterMonsters}/> 
   </div>
    );
}
}
export default App;