import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = (evt) => {
    this.setState(() => ({
      query: evt.target.value,
    }));
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.query === "") {
      return;
    } else {
      this.props.onSubmit(this.state.query)
    }
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            value={this.state.query}
            className="input"
            type="text"
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
