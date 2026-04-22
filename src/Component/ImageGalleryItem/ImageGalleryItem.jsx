import React, { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, id, name } = this.props;
    return (
      <li key={id}>
        <img src={webformatURL} alt={name} />
      </li>
    );
  }
}
