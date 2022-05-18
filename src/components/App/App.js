import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import searchYelp from '../../util/Yelp';




class App extends React.Component {
  constructor() {
    super();
    this.state = { businesses: [] }
    this.handleSearchYelp = this.handleSearchYelp.bind(this)
  }
  handleSearchYelp = async (term, location, sortBy) => {
    const data = await searchYelp(term, location, sortBy);
    this.setState({ businesses: data });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.handleSearchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
