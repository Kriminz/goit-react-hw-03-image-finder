import React, { Component } from "react";
import css from './ImageGallery.module.css'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component{
  state = {
    img: null
  }

  componentDidUpdate(prevProps, prevState){
    const prevName = prevProps.requestedImg;
    const nextName = this.props.requestedImg;

    if(prevName !== nextName){
      fetch(`https://pixabay.com/api/?q=cat&page=1&key=34723488-66dab51363ef0d45c9f34cb5f&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(img => this.setState({ img }))
    }
  }

  render() {
    return (
      <ul className={css.gallery}>
        {this.state.img && (<ImageGalleryItem imgItem={this.state.img}/>)}
      </ul>
    )
  }
}