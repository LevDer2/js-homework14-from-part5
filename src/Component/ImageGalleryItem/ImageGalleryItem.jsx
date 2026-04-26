import React, { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, id, name, onClick, largeImageURL, tags } = this.props;
    return (
      <li key={id}>
        <img
          onClick={() => {
            onClick(largeImageURL);
          }}
          src={webformatURL}
          alt={name}
        />
      </li>
    );
  }
}
