import React, { Component } from "react";
import SearchBar from "./Component/SearchBar/SearchBar";

export default class App extends Component {
  state = {
    query: "",
  };

  handleSearch = (query) => {
    this.setState((prevState) => ({
      query: query,
    }));
  };
  render() {
    console.log(this.state.query);
    return (
      <>
        <h1>Search a photos</h1>
        <SearchBar onSubmit={this.handleSearch} />
      </>
    );
  }
}
