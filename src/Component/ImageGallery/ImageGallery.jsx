import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
export default class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul>
        {images.map(({ webformatURL, id, name, largeImageURL, tags }) => {
          return (
            // <li key={id}>
            //   <img src={webformatURL} alt={name} />
            // </li>
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              name={name}
              onClick={onImageClick}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          );
        })}
      </ul>
    );
  }
}
