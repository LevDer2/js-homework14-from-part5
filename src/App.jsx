import React, { Component } from "react";
import SearchBar from "./Component/SearchBar/SearchBar";
import { fetchImages } from "./api";
import ImageGallery from "./Component/ImageGallery/ImageGallery";
import Loader from "./Component/Loader/Loader";
import Button from "./Component/Button/Button";

export default class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.loadImages();
    }
  }

  loadImages = () => {
    const { query, page } = this.state;
    if (!query) {
      return;
    }
    this.setState({ isLoading: true });
    fetchImages(query, page)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearch = (query) => {
    this.setState((prevState) => ({
      query: query,
      page: 1,
      images: [],
    }));
  };

  loadMore = () => {
    return this.setState(
      (prevState) => ({
        page: prevState + 1,
      }),
      this.loadImages(),
    );
  };

  render() {
    return (
      <>
        <h1>Search a photos</h1>
        {this.state.isLoading && <Loader />}
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && <Button onClick={this.loadMore} />}
      </>
    );
  }
}
