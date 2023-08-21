import React, { Component } from "react";
import css from './App.module.css'
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
// import { Modal } from "./Modal/Modal";

export class App extends Component{
  state = {
    requestedImg: ''
  }

  handleFormSubmit = requestedImg => {
    this.setState({ requestedImg: requestedImg})
  }

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery requestedImg={this.state.requestedImg}/>
      </div>
    );
  }
}